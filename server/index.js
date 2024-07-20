const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')

const app =express()
app.use(cors())

const port =process.env.port|| 8080

const schemaData = mongoose.Schema({
    name : String,
    email : String,
    mobile : String,
},{
    timestamps : true
})

mongoose.connect("mongodb://127.0.0.1:27017/crudoperation")
