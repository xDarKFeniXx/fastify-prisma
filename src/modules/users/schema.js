import { generateErrorSchema } from "../../utils/generateErrorSchema.js";

export const usersSchema = {
    title: "get all users title",
    description: "get all users description",
    tags: ["users"],
    response: {
        200: {
            type: "array",
            items: { $ref: "UserDTO" }
        }
    }
};

export const userByIdSchema = {
    title: "get user by id",
    description: "get user by id",
    tags: ["users"],
    params: {
        type: "object",
        properties: {
            id: {
                type: "string",
                description: "user id"
            }
        }
    },
    response: {
        200: { $ref: "UserDTO" },
        ...generateErrorSchema(404, { id: { type: "integer" } })
    }
};

export const createUserSchema = {
    title: "get user by id",
    description: "get user by id",
    tags: ["users"],
    body: {
        type: "object",
        properties: {
            name: { type: "string" },
            job: { type: "string" }
        },
        required: ["name", "job"]
    },
    response: {
        201: { $ref: "UserDTO" },
        ...generateErrorSchema(404, { id: { type: "integer" } })
    }
};
