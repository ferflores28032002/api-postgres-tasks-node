import { Sequelize } from 'sequelize'
import { database, host, pass, user } from '../env/configEnv.js'

// Conexión a postgresql

export const sequelize = new Sequelize(database, user, pass, {
    dialect: "postgres",
    host: host
})

// Conexión a mysql

// export const sequelize = new Sequelize('NameDatabase', 'user', 'password', {
//     dialect: "database",
//     host: "localhost"
// })