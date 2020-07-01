exports.getFeedDatata = (req, res) => {
    res.status(200).json({
        status: 'sucess',
        log: 'Getting all data'
    })
}

exports.postFeedData = (req, res) => {
    res.status(200).json({
        status: 'sucess',
        log: 'Posting new data'
    })
}

exports.updateFeedData = (req, res) => {
    res.status(200).json({
        status: 'sucess',
        log: `Updating ${req.params.id}`
    })
}

exports.deleteFeedData = (req, res) => {
    res.status(200).json({
        status: 'sucess',
        log: `Deleting ${req.params.id}`
    })
}