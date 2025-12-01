const dotenv = require('dotenv')
dotenv.config()
const uri = process.env.MONGO_URI
const mongoose = require('mongoose');

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });


