const Diaper = require('../models/diaperModel')
const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require('../middleware/async')

exports.getDiaperData = asyncHandler(async (req, res, next) => {
    const diaper = await Diaper.find()
    res.status(200).json({
        status: "sucess",
        data: diaper,
    });
});

exports.postDiaperData = asyncHandler(async (req, res, next) => {
    const diaper = await Diaper.create(req.body);
    res.status(201).json({
        success: true,
        data: diaper,
    });
});

exports.updateDiaperData = asyncHandler(async (req, res, next) => {
    const diaper = await Diaper.findByIdAndUpdate(req.body.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!diaper) {
        return next(new ErrorResponse(`No resource found with ID of ${req.body.id}`, 404))
    }
    res.status(200).json({
        status: "sucess",
        data: `Updating ${req.params.id}`,
    });
});

exports.deleteDiaperData = asyncHandler(async (req, res, next) => {
    const diaper = await Diaper.findByIdAndDelete(req.params.id)
    if (!diaper) {
        return next(new ErrorResponse(`No resource found with ID of ${req.body.id}`, 404))
    }
    res.status(200).json({
        status: "sucess",
        data: `Deleting ${req.params.id}`,
    });
});