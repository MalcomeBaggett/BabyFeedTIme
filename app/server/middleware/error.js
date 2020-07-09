const errorHandler = (err, res, res, next) => {
    let error = {
        ...err
    }
    err.message = err.message
    console.log(err)
    // Bad mongo ID
    if (err.name === 'CastError') {
        const message = `No Resource found with ID of ${err.value}`
        error = new ErrorResponse(message, 404)
    }
    // Duplicate ID
    if (err.code === 11000) {
        const message = "Duplicate field value entered"
        error = new ErrorResponse(message, 400)
    }
    // Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse(message, 400)
    }
    res.status(error.code || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
}
module.exports = errorHandler