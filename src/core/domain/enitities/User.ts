;

export class User {
    private userId : string = String();
    private userEmail : string = String() ;
    private userSalt : string = String() ;
    private userPassword:string = String();
   

   public setGeneralInfo(userEmail:string,userId?:string,): void {
     this.userEmail = userEmail
   }

   public setPassword(userPassword:string,userSalt:string) : void {
     this.userSalt = userSalt
     this.userPassword = userPassword
   }
}
