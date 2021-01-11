const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

require('./src/routers/UserRT')(app)

app.listen(8011, () => {
    console.log('Servidor online na porta: 8011')
})