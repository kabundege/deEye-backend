require('dotenv').config()
require('./config') // db initialization
const path = require('path')
const express = require('express')
const routes = require('./routes')
const { successResponse, errorResponse } = require('./helpers/utils')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static(path.join(__dirname,'../public')))

// Welcome Route
app.get('/',(_,res)=> successResponse(res,200,"Welcome to DeEye BackBone"))

// All Routes
app.use(routes)

// Not Found Route
app.use((_,res)=> errorResponse(res,404,'Page Not Found') )

module.exports = app;
