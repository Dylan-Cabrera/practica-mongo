import { Router } from "express";
import { createTask, getTasks } from "../controllers/task.controllers.js";
import { authUser } from "../middlewares/auth.js";


export const taskRoutes = Router();

taskRoutes.post("/tasks", authUser, createTask);
taskRoutes.get("/tasks", getTasks)