export const generateErrorSchema = (code) => ({
    [code]: {
        $ref: "ApiErrorDto"
    }
})
