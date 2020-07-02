const mongoose = require('mongoose')

const SleepSchema = new mongoose.Schema({
    startTime: {
        type: Date,
        default: Date.now(),
        required: true,
        unique: false,
    },
    endTIme: {
        type: Date,
        required: false,
        unique: false,
    }
})

module.exports = mongoose.model('Sleep', SleepSchema)