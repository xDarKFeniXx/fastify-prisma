import Fastify from "fastify";
import { mainModule } from "./modules/index.js";
import { swaggerPlugin } from "./plugins/swagger.js";
import { prismaPlugin } from "./plugins/prisma.js";
import { ApiErrorDto } from "./modelSchema/error.model.js";
import { ApiError } from "./utils/customError.js";
import { UserDto } from "./modelSchema/user.model.js";

const defaultOptions = {
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "HH:MM:ss Z",
                ignore: "pid,hostname",
                colorize: true
            }
        }
    }
};
export const app = async options => {
    //create instance
    const fastify = Fastify(options ? { ...defaultOptions, ...options } : defaultOptions);
    //register plugins
    fastify.register(prismaPlugin);
    fastify.register(swaggerPlugin);
    //add shared schemas
    fastify.addSchema(ApiErrorDto);
    fastify.addSchema(UserDto);
    //register main module as api route
    fastify.register(mainModule, { prefix: "/api" });
    //add error handle
    fastify.setErrorHandler(function (error, request, reply) {
        if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
            // Log error
            fastify.log.error(error);
            // Send error response
            reply.status(500).send({ ok: false });
        } else if (error instanceof ApiError) {
            reply.status(error.code).send(error);
        } else {
            // fastify will use parent error handler to handle this
            reply.send(error);
        }
    });
    //initialize something, for example swagger
    await fastify.ready();
    fastify.swagger();
    //return fastify instance
    return fastify;
};
