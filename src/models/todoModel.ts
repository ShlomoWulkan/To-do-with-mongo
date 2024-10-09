import { Schema, model, Model } from "mongoose";

interface ITodo {
    title: string;
    completed: boolean;
    timeToComplete: Date;
}

const TodoSchema: Schema<ITodo> = new Schema({
    title: {
        type: String,
        required: true
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    timeToComplete: {
    type: Date,
    required: true,
    validate: {
        validator: function(v: Date) {
            return v > new Date();
        },
        message: 'Time to complete must be in the future!'
    }
}

});

const TodoModel: Model<ITodo> = model("Todo", TodoSchema);

export { TodoSchema, TodoModel };