import express from "express";
import "dotenv/config";
import { StartDB } from "./src/config/database.js";
import { UserModel } from "./src/models/user.model.js";
import { TaskModel } from "./src/models/task.model.js";
import cookieParser from "cookie-parser";
import { router } from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT;

StartDB();
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Èscucnado servidor en el puerto ${PORT}`)
});