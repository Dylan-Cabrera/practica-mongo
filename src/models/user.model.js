import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minlength: [8, "La contraseña debe tener al menos 8 carácteres"]
    }
},{
    versionKey: false
});

export const UserModel = model("user", UserSchema);