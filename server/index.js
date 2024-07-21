const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')

const app =express()
app.use(cors())
app.use(express.json())

const port =process.env.port|| 8080

const schemaData = mongoose.Schema({
    name : String,
    email : String,
    mobile : String,
},{
    timestamps : true
})

const userModel = mongoose.model("user",schemaData)

//API section 
// read 
//"http://localhost:8080/"
app.get("/",async(req,res)=>{
    const data = await userModel.find({})
        res.json({success : true , data : data})
    })


    mongoose.connect("mongodb://127.0.0.1:27017/crudoperation")

    .then(()=>{
        console.log("connect to DB")
        app.listen(port,()=>console.log("Server is running"))
    
    })
    .catch((err)=>console.log(err))