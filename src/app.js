const routes = require('./routes');
const express = require("express")
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.get('/',(_,res)=>
    res.status(200).json({
        status: 200,
        error: "Welcome To deEye",
    })
)

app.use(routes)

app.use((_, res) =>
  res.status(404).json({
    status: 404,
    error: ' PAGE NOT FOUND ',
  })
);

module.exports = app;
