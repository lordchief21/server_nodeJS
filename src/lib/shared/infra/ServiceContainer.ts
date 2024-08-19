import SequelizeRepository from "../../User/infrastructure/connectionDB/SequelizeConnection";
import { PostgresUserRepository } from "../../User/infrastructure/repository/db/PostgresUserRepository";
import { UserService } from "../../User/application/service/UserService";

const userRepository = new PostgresUserRepository(new SequelizeRepository)

export const serviceContainer = {
    user: {
        service: new UserService(userRepository)
    }
}

