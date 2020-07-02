const Diaper = require('../models/diaperModel')

exports.getDiaperData = (req, res) => {
    res.status(200).json({
        status: "sucess",
        log: "Getting all data",
    });
};

exports.postDiaperData = async (req, res) => {
    try {
        const diaper = await Diaper.create(req.body);
        res.status(201).json({
            success: true,
            data: diaper,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
};

exports.updateDiaperData = (req, res) => {
    res.status(200).json({
        status: "sucess",
        log: `Updating ${req.params.id}`,
    });
};

exports.deleteDiaperData = (req, res) => {
    res.status(200).json({
        status: "sucess",
        log: `Deleting ${req.params.id}`,
    });
};