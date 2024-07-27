import "dotenv/config.js"

import { Sequelize } from "sequelize-typescript"
import Users from "../models/userModel.model";

export default class SQLRepository {


    // private __filename = fileURLToPath(import.meta.url);
    // private __dirname = path.dirname(this.__filename);
    // private __dirname = path.join(__dirname, ...Array(1).fill('..'))

    
    constructor() {
        this.connectDb()
    }

    async connectDb() {
        const repo = new Sequelize({

            database: this.CONFIG_INITDB.DB_NAME,
            dialect: 'postgres',
            username: this.CONFIG_INITDB.DB_USER,
            password: this.CONFIG_INITDB.DB_PASSWORD,
            host:this.CONFIG_INITDB.DB_HOST,
            port: Number(this.CONFIG_INITDB.DB_PORT),
            models: [Users],

        })
        try {
            await repo.authenticate();
            console.log('Connection has been established successfully.');
            await repo.sync({alter:true})
            console.log('All models were synchronized successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
        
    }



    CONFIG_INITDB = {
        DB_NAME  : process.env.DB_NAME,
        DB_PASSWORD  :process.env.DB_PASSWORD,
        DB_USER  :process.env.DB_USER,
        DB_PORT : process.env.DB_PORT,
        DB_HOST  : process.env.DB_HOST,
    }



}
