import express from "express";
import dotenv from "dotenv";
import { connectDb } from './Database/connectDb.js';
const app = express()
const PORT = process.env.PORT || 3000

dotenv.config();




app.get("/",(req,res)=>{
    res.send("hello express222s")
})



app.listen(PORT,  () => {
    connectDb();
    console.log(`http://localhost:${PORT}`);r
});