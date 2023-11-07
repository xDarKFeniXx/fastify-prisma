import { app } from "./app.js";

const start = async () => {
    const fastify = await app();
    try {
        await fastify.listen({ port: process.env.SERVER_PORT ?? 3001, host: process.env.SERVER_HOST ?? "localhost" });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
