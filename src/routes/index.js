import { Router } from "express";
import { authRoutes } from "./auth.routes.js";
import { taskRoutes } from "./task.routes.js";

export const router = Router();

router.use(authRoutes);
router.use(taskRoutes)