const Vonage = require('@vonage/server-sdk');
const mongoose = require('mongoose');

const { apiSecret,apiKey } = process.env


// mongoose.Promise = require('q')

let Is_DB_Ready = false;

const uri = process.env.DB_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    Is_DB_Ready = true;
    console.log('Connected to DB')
})
.catch((er) => console.log("an error occured when connect to the DB"));

const vonage = new Vonage({ apiKey,apiSecret })

module.exports = { mongoose,Is_DB_Ready,vonage };