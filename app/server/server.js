const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
})

app.listen(8080, () => {
    console.log('listening')
})