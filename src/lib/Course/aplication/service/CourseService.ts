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
         
        const courseSelected = await this.courseRepository.selectCourse(courseID)
        if(!courseSelected) throw new Error('Course not found')
        return courseSelected    
    }

    public async deleteCourse(courseID: string): Promise<void> {
    
    }


    public async updateCourse(course:Course): Promise<Course | undefined> {
        const courseToEdit = course.getCourseId

        if(!courseToEdit) throw new Error('Course Not Found')
            const courseResult =  await this.courseRepository.updateCourse(course) 
            return courseResult
    }

}
