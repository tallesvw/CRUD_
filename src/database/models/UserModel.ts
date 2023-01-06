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
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [0,12]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
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
});