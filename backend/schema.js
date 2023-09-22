const mongoose = require('mongoose');
const mySchema = new mongoose.Schema({
    photo:{
        type: String
    },
    hashtag:{
        type: String
    },
    caption:{
        type: String
    }
})

var data = new mongoose.model('Unesco',mySchema)

module.exports = data