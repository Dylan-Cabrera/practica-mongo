import { tokenDecoded } from "../helpers/jwt.helper.js"


export const authUser = (req,res,next) => {
    try {
        //primero se obtiene el token de la cookie
        const token = req.cookies["token"];
        //se verifica si existe un token
        if(!token) {
            return res.status(401).json({
                msg: "No autenticado"
            })
        };

        //decodicicar el token para acceder a su info
        const decoded = tokenDecoded(token);

        //se manda la info del token al req
        req.userLogged = decoded;
        console.log(decoded)

        next()
    } catch (error) {
        
    }
}