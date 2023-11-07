import {usersSchema, userByIdSchema, createUserSchema} from "./schema.js";
import usersService from "./service.js";

export const usersModule = async (fastify, opts, done) => {

    fastify.get("", {schema: usersSchema}, usersService.getUsers)
    fastify.get("/:id", {schema: userByIdSchema}, usersService.getUserById)
    fastify.post("", {schema: createUserSchema}, usersService.createUser)
    done()
}
