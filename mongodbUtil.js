const mongoose = require("mongoose")

let scoreSchema = new mongoose.Schema({
    date : String,
    score : Number
})

module.exports = scoreSchema;

