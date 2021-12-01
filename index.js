const app = require('./src/app');
const server = require('http').createServer(app);

const port = process.env.PORT || 2000;

server.listen(port,()=>console.log("Runnning on port ",port));
