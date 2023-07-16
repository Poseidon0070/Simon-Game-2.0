const express = require("express")
const app = express()
const mongoose = require("mongoose")
const scoreSchema = require("./mongodbUtil.js")

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Simon-game")
.then(() => {
    console.log("Connected successfully!")
})

const day = new Date()
const currday = day.toDateString()

const Score = mongoose.model("Score", scoreSchema)

app.get("/", (req,res) => {
    res.render('index')
})

app.post("/", (req,res) => {
    let newScore = new Score({
        date : currday,
        score : req.body.score
    })
    newScore.save()
})


app.listen(3000)