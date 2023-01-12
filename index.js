import express from 'express'
import cors from 'cors'
import { sequelize } from './DB/conexion.js';
import { puerto } from './env/configEnv.js';
import task from './routes/task.routes.js'

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(task)

try {
    await sequelize.authenticate()
    sequelize.sync({ force: false })
    console.log('Conectado Exitosamente a Postgresql')

} catch (error) {
    console.log('Error al conectar a postgresql')
}

app.listen(puerto, () => console.log(`Servidor corriendo en el puerto --> ${puerto}`))