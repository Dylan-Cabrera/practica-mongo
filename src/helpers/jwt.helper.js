import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export const createToken = (user) => {
    const firma = process.env.JWT_SECRET
    try {
        const token = jwt.sign({
            id: user.id,
            username: user.username
        }
        ,
        firma
        ,
        { expiresIn: "1h"})

        return token;

    } catch (error) {
        console.log("Error al crear el token, Error: " + error)
    }
};

export const tokenDecoded = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};
