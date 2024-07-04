const dotenv = require('dotenv').config()

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(`postgres://postgres:${process.env.postgrespass}@localhost:5432/elearning_node`)

const User = sequelize.define('user', {
    userID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    hashed_pass: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    salt: {
        type:DataTypes.STRING,
        allowNull:false
    }

},
{
    freezeTableName:true,
    timestamps:false
})



module.exports = User