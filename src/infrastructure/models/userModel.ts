
// `postgres://postgres:${process.env.postgrespass}@localhost:5432/elearning_node`


import { Column, Model, Table, Sequelize, DataType} from "sequelize-typescript"



@Table({
    timestamps: true,
    tableName:'tours',
    modelName:'Tour',
})
export class User extends Model{

    @Column({
        primaryKey:true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare userID: string ;

   @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare username:string;

     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare email:string;
    
     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare hashed_pass:string;

     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare salt:string;

}

export default User