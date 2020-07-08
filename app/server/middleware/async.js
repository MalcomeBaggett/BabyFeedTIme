// middle ware to elimate try catches in controller
const asyncHandler = func => (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next)
}

module.exports = asyncHandler