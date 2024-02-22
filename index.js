const express = require('express');
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();
app.use(cors())
app.use(express.json())

//connect to your database
mongoose.connect("mongodb://127.0.0.1:27017/crud")//crud is db name

//create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
//create mongoose model
const userModel = mongoose.model("user",userSchema)

app.put("/get_user/:id",(req,res)=>{
    const id = req.params.id
    userModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    .then((result)=>res.json(result))
    .catch(err =>res.json(err))
})

app.get("/get_data/:id",(req,res)=>{
    const id = req.params.id
    userModel.findById({_id:id})
    .then((result)=> res.json(result))
    .catch(err => res.json(err))
})

app.delete("/delete_User/:id",(req,res)=>{
    const id = req.params.id
    userModel.findByIdAndDelete({_id : id})
    .then((result)=>{
        res.json(result)
    })
    .catch(err => res.json(err))
})

app.get("/getUser",(req,res)=>{
    userModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch(err => res.json(err))
})

app.post("/postUser",(req,res)=>{
    const {name,email,password} = req.body
    userModel.create({
        name:name,
        email:email,
        password:password
    })
    .then((result)=>res.json(result))
    .catch((err)=>res.json(err))
    
})

app.listen(3000,()=>{
    console.log("server is running");
})