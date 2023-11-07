export const ApiErrorDto = {
    $id: "ApiErrorDto",
    type: "object",
    properties: {
        code: {type: "integer", description: "Status code of error"},
        message: {type: 'string', description: "Error type"},
        localizationMsg: {type: 'string', description: "localization id error message"},
        params: {
            type: "object",
            additionalProperties: true
        }
    }
}


