import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUsers from '../interfaces/book.interface';

class UserService {
    public model: UserModel;

    constructor() {
        this.model = new UserModel(connection);
    }

    public async getAll(): Promise<IUsers[]> {
        const users = await this.model.getAll();
        return users;
    }

    public async getById(id:number): Promise<IUsers> {
        const user = await this.model.getById(id);
        return user;
    }

    public async create(user: IUsers): Promise<IUsers> {
        const createUser = await this.model.create(user);
        return createUser;
    }
}

export default UserService;