export type CourseID = string; 
export type CourseName = string; 
export type CourseDescription = string; 
export type CoursePrice = string; 
export type CourseRating = string;
export type CourseImage = string;
export type disable = boolean;

export interface InterfaceCourse {
    id?: CourseID;
    name:CourseName;
    description: CourseDescription;
    courseImage: CourseImage;
    disable?:disable;                                                           
}