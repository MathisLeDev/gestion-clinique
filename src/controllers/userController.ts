import {User} from "../entity/user";

export class UserController {

    constructor() {
    }

    static async getUser(req: any, res: any) {
        const name = req.query.name;
        console.log(<string>name)
        const user = await User.findOne({where: {firstName: <string>name}});
        return res.json(user)
    }

    static async createUser(req: any, res: any) {
        console.log(req.body)
        if (!req?.body?.firstName || !req?.body?.lastName || !req?.body?.age) {
            return res.status(400).send({
                message: "Please provide firstName, lastName and age"
            });
        }
        const {firstName, lastName, age} = req.body;
        const user = User.create({firstName, lastName, age});
        await user.save();
        return res.json(user);
    }

    static async updateUser(req: any, res: any) {
        console.log(req.body)
        if (!req?.body?.id || !req?.body?.firstName || !req?.body?.lastName || !req?.body?.age) {
            return res.status(400).send({
                message: "Please provide id, firstName, lastName and age"
            });
        }

        const user = await User.findOne({where: {id: req.body.id}});

        if (!user) {
            return res.status(400).send({
                message: "User not found"
            });
        }

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        await user.save();
        return res.json(user);
    }
}