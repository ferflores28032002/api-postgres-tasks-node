import { taskModel } from "../models/task.model.js";

export const loadTask = async (req, res) => {
    try {
        
        const task = await taskModel.findAll()
        res.json(task)

    } catch (error) {
        console.log(error)
    }
}

export const addTaks = async (req, res) => {
    const { name, description } = req.body

    try {
        
        const task = await taskModel.create({ name, description })

        res.json("¡Task created successfully!")

    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = async (req, res) => {

    const { id } = req.params

    try {



        const task = await taskModel.destroy({
            where: {
                id
            }
        }) 

        if(task === 0) {
            res.json('No exist a task with the id ' + id)
        }else {
            res.json('¡Task deleted successfully!')
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const editTask = async (req, res) => {

    const { id } = req.params
    const { name, description } = req.body

    try {
        
        const task = await taskModel.findOne({ where: { id } })

        if(task) {
            task.set({ name, description })
            await task.save()

            res.json('¡Edit with successfully!')
        }else {
            res.json('Error al ser editado')
        }

    } catch (error) {
        console.log(error)
    }
}