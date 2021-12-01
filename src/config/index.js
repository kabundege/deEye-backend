const mongoose = require('mongoose');

// mongoose.Promise = require('q')

let Is_DB_Ready = false;

const uri = process.env.DB_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    Is_DB_Ready = true;
    console.log('Connected to DB')
})
.catch((er) => console.log("an error occured when connect to the DB"));

module.exports = { mongoose,Is_DB_Ready };