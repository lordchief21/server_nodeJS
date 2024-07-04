export type IdUser = string; 
export type NamerUser = string; 
export type UserEmail = string; 
export type UserPassword = string; 
export type UserSalt = string; 

export interface IUser {
    id: IdUser;
    username: NamerUser;
    email: UserEmail;
    password: UserPassword;
    salt?:UserSalt;
}