import Course from '../../domain/model/Course';
import {CourseRepository} from '../../domain/repository/CourseRepository'


export class CourseService implements CourseRepository {

    constructor(courseRepository:CourseRepository){}

    public async createCourse(course: Course): Promise<void> {
    
    }

    public async selectCourse(courseID: string): Promise<Course | null> {
        return null
    }

    public async deleteCourse(courseID: string): Promise<void> {
    
    }
    public async updateCourse(courseID: string): Promise<Course | null> {
        return null
    }

}
