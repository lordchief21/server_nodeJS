
import { User } from "../ model/enitities/User";

export interface UserRepository {
    createUser(user:User) : Promise<void> ;
}