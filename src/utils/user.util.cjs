const bcrypt = require('bcryptjs')

//Builder pattern implemented to create new user for each
class User {
    constructor(username,email,password, salt){
        this.username = username,
        this.email = email,
        this.password = password,
        this.salt = salt
    }

}


class UserBuilder {
    
    setGeneralInfo(username,email){
        this.username = username,
        this.email = email
        return this
    }

    hashPass(password) {
        this.salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(password,this.salt);
        return this
    }

    build(){
        return new User(this.username,this.email,this.password, this.salt);
    }
}

module.exports = UserBuilder
