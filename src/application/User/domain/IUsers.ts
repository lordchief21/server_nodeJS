export type UserID = string; 
export type UserName = string; 
export type UserEmail = string; 
export type UserPassword = string; 
export type UserSalt = string; 

export interface InterfaceUser {
    id?: UserID;
    username:UserName;
    email: UserEmail;
    password: UserPassword;
    salt?:UserSalt;
}