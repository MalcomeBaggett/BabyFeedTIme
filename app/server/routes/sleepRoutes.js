const express = require('express')
const router = express.Router()
const {
    getSleepData,
    postSleepData,
    updateSleepData,
    deleteSleepData
} = require('../controllers/sleepRoutes')

router.route('/').get(getSleepData).post(postSleepData)
router.route('/:id').put(updateSleepData).delete(deleteSleepData)

module.exports = router