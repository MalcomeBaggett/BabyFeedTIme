const mongoose = require('mongoose')

const DiaperSchema = new mongoose.Schema({
    pee: {
        type: Boolean,
        required: false,
        unique: false,
    },
    potty: {
        type: Boolean,
        required: false,
        unique: false,
    },
    both: {
        type: Boolean,
        required: false,
        unique: false
    }
})

module.exports = mongoose.model('Diaper', DiaperSchema)