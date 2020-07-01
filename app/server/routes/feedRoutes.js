const express = require('express')
const router = express.Router()

// get all feed data
router.get('/', (req, res) => {
    res.status(200).json({
        status: 'sucess',
        log: 'Getting all data'
    })
})
// post new feed data
router.post('/', (req, res) => {
    res.status(200).json({
        status: 'sucess',
        log: 'Posting new data'
    })
})
// updating data
router.put('/:id', (req, res) => {
    res.status(200).json({
        status: 'sucess',
        log: `Updating ${req.params.id}`
    })
})
// delete data
router.delete('/:id', (req, res) => {
    res.status(200).json({
        status: 'sucess',
        log: `Deleting ${req.params.id}`
    })
})

module.exports = router