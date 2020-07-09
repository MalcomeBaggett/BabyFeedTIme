const Sleep = require('../models/sleepModel')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')

exports.getSleepData = asyncHandler(async (req, res, next) => {
    const sleep = await Sleep.find()
    res.status(200).json({
        status: "sucess",
        log: sleep,
    });
});

exports.postSleepData = asyncHandler(async (req, res, next) => {
    const sleepTime = await Sleep.create(req.body);
    res.status(201).json({
        success: true,
        data: sleepTime,
    });

});

exports.updateSleepData = asyncHandler(async (req, res, next) => {
    const sleep = await Sleep.findByIdAndUpdate(req.body.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!sleep) {
        return next(ErrorResponse(`No resource with ID of ${req.body.params} found`, 404))
    }
    res.status(200).json({
        status: "sucess",
        log: `Updating ${req.params.id}`,
    });
});

exports.deleteSleepData = asyncHandler(async (req, res, next) => {
    const sleep = await Sleep.findByIdAndDelete(req.body.params)
    if (!sleep) {
        return next(ErrorResponse(`No resource with ID of ${req.body.params} found`, 404))
    }
    res.status(200).json({
        status: "sucess",
        log: {},
    });
});