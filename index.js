require("dotenv").config();
const http  = require('http');
const app =  require('./src/app');

const server = http.createServer(app);

const port = process.env.PORT || 2000;

server.listen(port,()=>{
    console.log(` You are running port ${port}....`)
});