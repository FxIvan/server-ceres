const express = require('express')
const app = express()
const cors = require('cors')
require('./www/mongo/db')

app.use(cors())
app.use(express.json())

app.use('/v1/endpoint/request-linux', require('./routes/commandLinuxRoute'))
app.use('/v2/endpoint/pingip', require('./routes/pingRoute'))
app.use('/v3/api-whatsapp/alerts' , require('./routes/whatsappRoute'))

module.exports = app