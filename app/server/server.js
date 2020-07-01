const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()

// api routes
const feedRoute = require('./routes/feedRoutes')


// configs
app.use(bodyParser.urlencoded({
    extended: true
}))
dotenv.config({
    path: './config/config.env'
})
// load routes
app.use('/api/v1/feedRoutes', feedRoute)
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})