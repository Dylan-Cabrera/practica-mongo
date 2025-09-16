import { comparePassword, passwordHash } from "../helpers/bcrypt.helper.js";
import { createToken } from "../helpers/jwt.helper.js";
import { UserModel } from "../models/user.model.js";


export const register = async (req,res) => {
    const {username, password} = req.body;
    try {
        const hashedPassword = await passwordHash(password);

        const newUser = await UserModel.create({username: username,
            password: hashedPassword});

        res.status(201).json({
            msg:"Usuario creado correctamente",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor 1"
        });
        console.log(error);
    }
};

export const login = async (req,res) => {
    console.log(req.body)
    const {username, password} = req.body;
    try {
        const user = await UserModel.findOne({
            username: username
        });

        if(!user) {
            return res.status(404).json({
                msg: "Usuario no encontrado"
            })
        }

        
        const verifyPassword = await comparePassword(password, user.password)
        if(!verifyPassword) {
            return res.status(403).json("Credenciales incorrectas")
        };

        const token = createToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000*60*60
        });
        
        res.status(200).json({
            msg: "Logueado correctamente"
        })
    } catch (e) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(e);
    }
};

export const logout = async (req,res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({
            msg: "Logout exitoso"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};