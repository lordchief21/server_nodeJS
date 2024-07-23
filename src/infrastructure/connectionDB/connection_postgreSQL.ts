import "dotenv/config.js"

//Only needed to use __dirname
import path from 'path';
import { fileURLToPath } from 'url';


import { Sequelize } from "sequelize-typescript"

var __filename = fileURLToPath(import.meta.url);
var __dirname =path.dirname(__filename);
__dirname = path.join(__dirname, ...Array(1).fill('..'))

export class SQLRepository {


    // private __filename = fileURLToPath(import.meta.url);
    // private __dirname = path.dirname(this.__filename);
    // private __dirname = path.join(__dirname, ...Array(1).fill('..'))


    constructor() {
        this.connectDb()
    }

    connectDb(): any {
        const repo = new Sequelize({

            database: this.CONFIG_INITDB.DB_NAME,
            dialect: 'postgres',
            username: this.CONFIG_INITDB.DB_USER,
            password: this.CONFIG_INITDB.DB_PASSWORD,
            host:this.CONFIG_INITDB.DB_HOST,
            port: Number(this.CONFIG_INITDB.DB_PORT),
            models: [__dirname + '/models']

        })

    }



    CONFIG_INITDB = {
        DB_NAME  : process.env.DB_NAME,
        DB_PASSWORD  :process.env.DB_PASSWORD,
        DB_USER  :process.env.DB_USER,
        DB_PORT : process.env.DB_PORT,
        DB_HOST  : process.env.DB_HOST,
    }



}
