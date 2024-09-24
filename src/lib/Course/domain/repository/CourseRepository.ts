import Course from "../model/Course";



export interface CourseRepository {
    createCourse(course:Course): Promise<void>;
    selectCourse(courseID:string): Promise<Course | null>;
    updateCourse(course:Course): Promise<Course | undefined>;
    deleteCourse(courseID:string): Promise<Course | null>;

}