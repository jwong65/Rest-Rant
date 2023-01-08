const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: {type: String, default: 'Nobody'},
    rant: {type: Boolean, default: false},
    star: {type: Number, required: true},
    content: {type: String, default: 'Nothing'}

})

module.exports = mongoose.model('Comment', commentSchema)
