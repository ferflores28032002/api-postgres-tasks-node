import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";

export const taskModel = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
})