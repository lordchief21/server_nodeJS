
import { Column, Model, Table, DataType} from "sequelize-typescript"




@Table({
    timestamps: true,
    tableName:'courses',
})

export default class Courses extends Model{

    @Column({
        primaryKey:true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string ;

   @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare course_name:string;

     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare description :string;

     @Column({
      type: DataType.STRING,
      allowNull: false
      })
      declare price :number;
    
     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare courseImage:string;

     @Column({
        type: DataType.BOOLEAN,
        allowNull: false
     })
     declare isDisable:boolean;

}