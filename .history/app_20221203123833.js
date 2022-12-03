const express = require('express')
const app = express()
const cors = require('cors')
require('./www/mongo/db')

const commandLinuxSchema = require('./models/linuxModel')


app.use(cors())
app.use(express.json())

app.get('/', async(req,res)=>{

    const result_commandLinux = await commandLinuxSchema.find()

    res.send(result_commandLinux)
})

app.use('/v1/endpoint/request-linux', require('./routes/commandLinuxRoute'))

module.exports = app