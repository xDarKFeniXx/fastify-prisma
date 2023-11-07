
export const UserDto={
    $id: 'UserDTO',
    type:"object",
    tags:["users"],
    properties:{
        id:{type:"integer", example:123},
        name:{type:"string", example:"jondoe"},
        job:{type:"string", example:"jondoejob"},
    },
    required:["id", "name", "job"]
}
