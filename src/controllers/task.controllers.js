import { TaskModel } from "../models/task.model.js";
import { UserModel } from "../models/user.model.js";


export const createTask = async (req,res) => {
    const {title, description} = req.body;
    const user = req.userLogged;
    try {

        const newTask = await TaskModel.create({
            title: title,
            description: description,
            user: user.id
        });
        res.status(201).json({
            msg: "Tarea creada correctamente",
            data: newTask
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error)
    }
}

export const getTasks = async (req,res) => {
    try {
        const tasks = await TaskModel.find().populate("user","-_id -password");
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error)
    }
}