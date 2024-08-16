export interface Builder {
    setGeneralInfo(userName:string,userEmail:string,userId?:string): this ;
    setPassword(password:string,userSalt: string):this;
} 