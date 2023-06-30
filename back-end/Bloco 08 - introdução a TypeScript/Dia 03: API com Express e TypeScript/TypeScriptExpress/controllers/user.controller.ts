import { Request, Response } from "express";
import statusCodes from "../statusCodes";
import UserService from "../services/users.service";

class UserController {
    constructor(private userService = new UserService()) { }

    public getAll = async (req: Request, res: Response) => {
        const users = await this.userService.getAll();
        res.status(statusCodes.OK).json(users)
    };

    public getById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const user = await this.userService.getById(id);

        if (!user) {
            return res.status(statusCodes.NOT_FOUND)
                .json({ message: 'Book not found!' });
        }

        res.status(statusCodes.OK).json(user);
    }

    public create = async (req: Request, res: Response) => {
        const newUser = req.body;

        const user = await this.userService.create(newUser);
        res.status(statusCodes.CREATED).json(user);
    }
    
}

export default UserController;