import { DataTypes } from "sequelize";
import { db } from "../db";
import { AdressModel } from "./AdressModel";

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
});

UserModel.hasMany(AdressModel, { as: "address"})
AdressModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    as: "user"
})