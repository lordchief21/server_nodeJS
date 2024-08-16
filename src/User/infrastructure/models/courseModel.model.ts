
import { Column, Model, Table, DataType} from "sequelize-typescript"




@Table({
    timestamps: true,
    tableName:'categories',
})

export default class Course extends Model{

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
     declare name:string;

     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare description :string;
    
     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     declare courseImage:string;

     @Column({
        type: DataType.BOOLEAN,
        allowNull: false
     })
     declare disable:boolean;

}