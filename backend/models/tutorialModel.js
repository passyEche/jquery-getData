const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    author: {
        type: String, required: true
    },
    tutorialType:{
        type: String, required: true
    }
})

module.exports = Tutorial =  mongoose.model('tutorial', tutorialSchema);
