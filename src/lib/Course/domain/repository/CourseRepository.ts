import Course from "../model/Course";



export interface CourseRepository {
    createCourse(course:Course): Promise<void>;
    selectCourse(courseID:string): Promise<Course | null>;
    updateCourse(courseID:string): Promise<Course|null>;
    deleteCourse(courseID:string): Promise<void>;

}