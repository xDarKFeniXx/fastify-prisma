import { Api404Error } from "../../utils/customError.js";

class UsersService {
    getUsers = async req => {
        return req.server.prisma.user.findMany({});
    };
    getUserById = async req => {
        const id = Number(req.params.id);
        const user = await req.server.prisma.user.findUnique({
            where: { id }
        });
        if (!user) {
            return new Api404Error("userNotFound", { id }, `User with id=${id} not found`);
        }
        return user;
    };
    createUser = async (req, res) => {
        const { name, job } = req.body;
        try {
            const newUser = await req.server.prisma.user.create({ data: { name, job } });
            res.code(201);
            return newUser;
        } catch (e) {
            console.log(e);
            throw e;
        }
    };
}

export default new UsersService();
