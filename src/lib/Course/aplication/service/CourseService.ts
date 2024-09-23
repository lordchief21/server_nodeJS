import Course from '../../domain/model/Course';
import {CourseRepository} from '../../domain/repository/CourseRepository'


export class CourseService {

    constructor(private courseRepository:CourseRepository){}

    public async createCourse(courseName:string,description:string,price:number, courseImage:string, isDisable:boolean): Promise<void> {

        //Instance Course Object
        const newCourse = new Course(courseName,description,price,courseImage,isDisable)

        //Calculate taxes
        let totalPrice = newCourse.calculateTotalPrice([0.12,0.14])
        

        //set new Price including taxes
        newCourse.setPrice(totalPrice)

        await this.courseRepository.createCourse(newCourse)
    
    }

    public async selectCourse(courseID: string): Promise<Course | null> {
            await this.courseRepository.selectCourse(courseID)
            return null
    }

    public async deleteCourse(courseID: string): Promise<void> {
    
    }


    public async updateCourse(courseID: string): Promise<Course | null> {
        return null
    }

}
