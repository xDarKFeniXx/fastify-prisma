import {healthCheckModule} from "./healthCheck/index.js"
import {usersModule} from './users/index.js';


export const mainModule = async (fastify, opts, done) => {
    fastify.register(healthCheckModule, {prefix: "/healthcheck"})
    fastify.register(usersModule, {prefix: "/users"})
    done()
}

