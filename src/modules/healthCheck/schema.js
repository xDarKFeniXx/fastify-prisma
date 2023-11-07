
export const healthCheckSchema={
    tags:["healthcheck"],
    response: {
        200: {
            type: 'object',
            properties: {
                status: { type: 'string' }
            }
        }
    }
}
