
import { UserBuilder } from "../ model/concreteBuilder/UserBuilder";
import { User } from "../ model/enitities/User";

export interface UserRepository {
    createUser(user:User) : Promise<void> ;
    getUserById(userId: string) : Promise<User | null>;
    deleteUser(userId: string) : Promise<User>;
    editUser(user: User) : Promise<User>
}