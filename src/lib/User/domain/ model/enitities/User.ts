;

export class User {
    private userId? : string = String();
    private userName: string = String()
    private userEmail : string = String() ;
    private userSalt : string = String() ;
    private userPassword:string = String();


   public setGeneralInfo(userName: string, userEmail:string,userId?:string,): void {
    this.userId = userId
    this.userName = userName
    this.userEmail = userEmail
   }

   public setPassword(userPassword:string,userSalt:string) : void {
     this.userSalt = userSalt
     this.userPassword = userPassword
   }

   public MapToObject() {
    
    return {
      userId : this.userId,
      username : this.userName,
      email : this.userEmail,
      salt : this.userSalt,
      password : this.userPassword 
    }
      
    
   }

   get infoUser() {
    return {
      userId:  this.userId,
      userName : this.getUserName,
      userEmail: this.userEmail

    }
   }
   get getUserId() {return this.userId}
   get getUserName() {return this.userName}
   get getUserEmail() {return this.userEmail}
   get getUserSalt() {return this.userSalt}
   get getUserPassword() {return this.userPassword}
   
}
