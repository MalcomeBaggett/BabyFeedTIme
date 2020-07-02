const Sleep = require('../models/sleepModel')

exports.getSleepData = (req, res) => {
    res.status(200).json({
        status: "sucess",
        log: "Getting all data",
    });
};

exports.postSleepData = async (req, res) => {
    try {
        const sleepTime = await Sleep.create(req.body);
        res.status(201).json({
            success: true,
            data: sleepTime,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
};

exports.updateSleepData = (req, res) => {
    res.status(200).json({
        status: "sucess",
        log: `Updating ${req.params.id}`,
    });
};

exports.deleteSleepData = (req, res) => {
    res.status(200).json({
        status: "sucess",
        log: `Deleting ${req.params.id}`,
    });
};