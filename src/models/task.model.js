import { model, Schema, Types } from "mongoose";
import { type } from "os";

const TaskSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    user: {
        type: Types.ObjectId,
        require: true,
        ref: "user"
    }
},
{
    versionKey: false
})

export const TaskModel = model("task", TaskSchema);