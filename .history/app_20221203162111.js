const express = require('express')
const app = express()
const cors = require('cors')
require('./www/mongo/db')

const commandLinuxSchema = require('./models/linuxModel')


app.use(cors())
app.use(express.json())

app.use('/v1/endpoint/request-linux', require('./routes/commandLinuxRoute'))
app.use('/v2/endpoint/pingip')

module.exports = app