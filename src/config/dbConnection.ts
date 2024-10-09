import mongoose from "mongoose";

export const dbConnection = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoApp')
        console.log("successfully connected to MongDB")
    } catch (err) {
        console.log(err)
    }
}
