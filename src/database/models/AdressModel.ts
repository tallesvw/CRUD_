import { DataTypes } from "sequelize";
import { db } from "../db";
import { UserModel } from './UserModel';

export const AdressModel = db.define('adress', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cep: {
        type: DataTypes.INTEGER,
        validate: {
            len: [0,8],
            isNumeric: true,
        }
    },
    rua: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    bairro: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    estado: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        }
    }
});