const express = require('express')
const router = express.Router()
const {
    getDiaperData,
    postDiaperData,
    updateDiaperData,
    deleteDiaperData
} = require('../controllers/diaperRoutes')

router.route('/').get(getDiaperData).post(postDiaperData)
router.route('/:id').put(updateDiaperData).delete(deleteDiaperData)

module.exports = router