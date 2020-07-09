const mongoose = require('mongoose')

const FeedSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: [true, 'Please input amount'],
        unique: false,
        maxlength: [3, 'Please check feed amount']
    },
    type: {
        type: String,
        required: [true, 'Please enter type of Milk'],
        unique: false,
    }
})

module.exports = mongoose.model('Feed', FeedSchema)