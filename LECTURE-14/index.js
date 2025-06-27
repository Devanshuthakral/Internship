const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;
require('dotenv').config()

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))


console.log(process.env.DATABASE_URL);

app.listen(PORT,()=>{
    console.log(`live on ${PORT}`);
})