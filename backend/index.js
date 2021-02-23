const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
    "mongodb://localhost:27017/jquery",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if (err) throw err
        console.log('mongodb connected sucessfully')
    });

const tutorial = require('./route/tutorialRoute')
app.use('/tutorial', tutorial)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('App listening in port 5000')
})