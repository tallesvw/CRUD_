import { DataTypes } from "sequelize";
import { db } from "../db";

export const UserModel = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Esse campo precisa ser um e-mail"
            },
        }  
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: {
                args: [1, 3],
                msg: "Esse campo deve ter entre 1 e 3 "  
            },
            isInt: {
                msg: "esse campo precisa ser passado sua idade",
            },    
        }
    },
});