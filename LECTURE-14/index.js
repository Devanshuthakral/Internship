const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const userschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 125,
  },
  available: {
    type: Boolean,
    default: false,
  },
  arr: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("User", userschema);

app.get("/create", async (req,res) => {
  try {
    let newUser = await User.create({
      name: "devanshu",
      email: "devanshuthakral09@gmail.com",
      arr: ["hii", "hello"],
    });
    console.log(newUser);
    res.json({ newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
});

app.get("/users",async (req,res)=>{
    try{
        let users = await User.find(); //find all users
        res.status(200).json({users}) 
    }
    catch(error){
  console.log(error);
  res.status(400).json({message:error.message})
    }
})

app.get("/update/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        await User.updateOne({_id:id,name:"devanshu thakral"}) // find a user by _id 
        //and update the name to "devanshu thakral"
        res.status(200).json({message:"user updated successfully"})
    }
    catch(error){
   console.log(error);
  res.status(400).json({message:error.message})
    }
})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
