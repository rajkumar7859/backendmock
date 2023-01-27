const express = require('express');
const cors =require("cors")
require("dotenv").config()
const mongoose = require('mongoose');
const User = require('../model/user.model');
// const randomWord = require('random-word');
const port =process.env.PORT
const app = express();
app.use(express.json)
app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello Rajkumar")
});

app.post("/login", (req, res) => {
    const { Name , difficulty } = req.body;
    const user = new User({ Name , difficulty });
console.log(user);
    user.save()
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.get('/playzone', (req, res) => {
//   const word = randomWord();
  res.json({word});
});


mongoose.connect(process.env.DB_ULR).then(()=>{
    app.listen(port , ()=> {console.log(`server is running on port ${port} `)});
})


// mongodb+srv://rajkumar14:rajkumar141@cluster0.rfnld8t.mongodb.net/test
// mongodb+srv://rajkumar14:rajkumar141@cluster0.rfnld8t.mongodb.net/?retryWrites=true&w=majority