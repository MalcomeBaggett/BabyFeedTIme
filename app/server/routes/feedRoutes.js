const express = require('express')
const router = express.Router()
const {
    getFeedDatata,
    postFeedData,
    updateFeedData,
    deleteFeedData
} = require('../controllers/feedRoutes')

router.route('/').get(getFeedDatata).post(postFeedData)
router.route('/:id').put(updateFeedData).delete(deleteFeedData)
module.exports = router