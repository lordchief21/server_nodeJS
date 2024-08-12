export interface Builder {
    setGeneralInfo(userEmail:string,userId?:string): this ;
    setPassword(password:string,userSalt: string):this;
} 