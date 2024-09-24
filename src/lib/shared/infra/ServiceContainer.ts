import UserSequelizeRepository from "../../User/infrastructure/connectionDB/SequelizeConnection";
import CourseSequelizeRepository from "../../Course/infrastructure/connectionDB/SequelizeConnection";
import { PostgresUserRepository } from "../../User/infrastructure/repository/db/PostgresUserRepository";
import { UserService } from "../../User/application/service/UserService";
import { CourseService } from "../../Course/aplication/service/CourseService";
import { PostgresCourseConn } from "../../Course/infrastructure/repository/db/PostgresCourseConn";

const userRepository = new PostgresUserRepository(new UserSequelizeRepository)
const courseRepository = new PostgresCourseConn(new CourseSequelizeRepository)

export const serviceContainer = {
    user: {
        service: new UserService(userRepository)
    },
    
    course: {
        service: new CourseService(courseRepository)
    }
}

