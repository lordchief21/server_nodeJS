import Course from "../../../domain/model/Course";
import { CourseRepository } from "../../../domain/repository/CourseRepository";
import SequelizeRepository from "../../connectionDB/SequelizeConnection";
import Courses from "../../model/courseModel.model";


export class PostgresCourseConn implements CourseRepository {

    constructor(readonly sequelizeRepository : SequelizeRepository) {}

    async createCourse(course: Course): Promise<void> {
        try {
            await this.sequelizeRepository.connectDb()

            Courses.build({
                course_name:course.getCourseName,
                description: course.getDescription,
                price:course.getPrice,
                courseImage:course.getCourseImage,
                isDisable:course.getIsDisabled,
            }).save()



        } catch (error) {
            console.log('PostgresCourseConn', error)
        }
    }

    async selectCourse(courseID: string): Promise<Course | null> {
        try {
        
            const courses = await Courses.findOne({
                where: {
                    id : courseID
                }
            })
            if(!courses) throw new Error('Course not found')
                console.log('test',courses)
                const mapCourse = this.mapToCourseDomain(courses)
                console.log('mapped',mapCourse)
                return mapCourse

        } catch (error) {
            console.log('PostgresCourseConn', error)
            return null   
        } 
        
    }

    async deleteCourse(courseID: string): Promise<Course | null> {
        try {
            const courses = await Courses.findOne({
                where: {
                    id : courseID
                }
            })
            if(!courses) throw new Error('Course not found')
                courses?.destroy()
                const courseMapped = this.mapToCourseDomain(courses)
                return courseMapped
            
        } catch (error) {
            console.log('PostgresCourseConn', error)
            return null
        }
    }

    async updateCourse(courseID: string, updateField:any): Promise<Course | undefined> {
        
        try {
            const courses = await Courses.findOne({
                where: {
                    id: courseID
                }
            })
            
            if(!courses) throw new Error('Course Not Found')
                const mapCourse = this.mapToCourseDomain(courses)

                console.log('PostgressConUpdateField',updateField)
                const result = this.mapToCourseDomain(await courses.set(updateField).save()) 
                console.log('PostgresRepoEdit', result)
                return result
        } catch (error) {
            console.log('PostgresCourseConn', error)
            
        } finally {
            return undefined
        }
    }

    private mapToCourseDomain(courses:Courses):Course {
        const course = new Course(
            courses.dataValues.course_name,
            courses.dataValues.description,
            courses.dataValues.price,
            courses.dataValues.courseImage,
            courses.dataValues.isDisable,
            courses.dataValues.id
        )
        return course
    }






}