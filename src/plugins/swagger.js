import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import fp from "fastify-plugin";
export const swaggerPlugin = fp(async (fastify, _opts) => {
    await fastify.register(swagger);
    await fastify.register(swaggerUI, { routePrefix: "/docs" });
});
