import mongoose from "mongoose";

export const connectDb = async() => {
    console.log(process.env.DB_URL)
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log("connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}