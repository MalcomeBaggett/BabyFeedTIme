const Feed = require("../models/feedModel");
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')

exports.getFeedDatata = asyncHandler(async (req, res, next) => {
    const feed = await Feed.find()
    res.status(200).json({
        status: "sucess",
        data: feed,
    });
});

exports.postFeedData = asyncHandler(async (req, res, next) => {
    const feed = await Feed.create(req.body);
    res.status(201).json({
        success: true,
        data: feed,
    });
});

exports.updateFeedData = asyncHandler(async (req, res, next) => {
    const feed = await Feed.findByIdAndUpdate(req.body.id, red.body, {
        new: true,
        runValidators: true
    })
    if (!feed) {
        return next(ErrorResponse(`No resource with ID of ${req.body.params} found`, 404))
    }
    res.status(200).json({
        status: "sucess",
        data: feed,
    });
});

exports.deleteFeedData = asyncHandler(async (req, res, next) => {
    const feed = await Feed.findByIdAndDelete(req.params.id)
    if (!feed) {
        return next(ErrorResponse(`No resource with ID of ${req.body.params} found`, 404))
    }
    res.status(200).json({
        status: "sucess",
        log: `Deleting ${req.params.id}`,
    });
});