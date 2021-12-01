require('dotenv').config()
require('./config') // db initialization
const express = require('express')
const { setSuccess, setError, send } = require('./helpers/utils')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

// Welcome Route
app.get('/',(_,res)=> {
    setSuccess(200,"Welcome to DeEye BackBone")
    return send(res);
})

// All Routes
app.use(routes)

// Not Found Route
app.use((_,res)=>{ 
    setError(404,'Page Not Found') 
    return send(res)
})

module.exports = app;
