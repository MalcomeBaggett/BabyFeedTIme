const Feed = require("../models/feedModel");

exports.getFeedDatata = (req, res) => {
  res.status(200).json({
    status: "sucess",
    log: "Getting all data",
  });
};

exports.postFeedData = async (req, res) => {
  try {
    const feed = await Feed.create(req.body);
    res.status(201).json({
      success: true,
      data: feed,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

exports.updateFeedData = (req, res) => {
  res.status(200).json({
    status: "sucess",
    log: `Updating ${req.params.id}`,
  });
};

exports.deleteFeedData = (req, res) => {
  res.status(200).json({
    status: "sucess",
    log: `Deleting ${req.params.id}`,
  });
};
