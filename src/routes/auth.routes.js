import { Router } from "express";
import {register, login, logout } from "../controllers/auth.controllers.js";

export const authRoutes = Router();

authRoutes.post("/auth/register", register);
authRoutes.post("/auth/login", login);
authRoutes.post("/auth/logout", logout);