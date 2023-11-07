

import fp from "fastify-plugin";
import {healthCheckSchema} from "./schema.js";
import {healthCheckService} from "./service.js";
export const healthCheckModule=fp(async(fastify)=>{
    fastify.get("", {schema:healthCheckSchema}, healthCheckService)
})

