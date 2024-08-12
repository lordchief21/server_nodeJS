import { User } from "../enitities/User";


export interface UserRepository {
    save(user:User):void;   
}   