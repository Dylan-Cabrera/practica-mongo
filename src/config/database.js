import mongoose from "mongoose";

export const StartDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/practica")
        console.log("Conectado a la base de datos")
        //await mongoose.connection.dropDatabase();
    } catch (error) {
        console.log("Erro al conectar a la base de datos")
        process.exit(1);
    }
}