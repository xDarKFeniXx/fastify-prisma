import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";
export const prismaPlugin = fp(async (fastify, _opts, _done) => {
    const prisma = new PrismaClient();
    //
    await prisma.$connect();

    // Make Prisma Client available through the fastify server instance: server.prisma
    fastify.decorate("prisma", prisma);

    fastify.addHook("onClose", async server => {
        await server.prisma.$disconnect();
    });
});
