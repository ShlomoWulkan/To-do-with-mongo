import { Model, Schema, model } from "mongoose";
import { TodoSchema } from "./todoModel";

interface IUser {
    name: string;
    todos: Schema.Types.ObjectId[];
}

const UserSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true
    },
    todos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
});

const UserModel: Model<IUser> = model("User", UserSchema);

export default UserModel