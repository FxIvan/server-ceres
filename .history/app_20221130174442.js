const express = require('express')
const app = express()
const cors = require('cors')
require('./www/mongo/db')


app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Dentro de la ruta principal')
})

app.use('/v1/endpoint/request-linux', require('./routes/commandLinuxRoute'))

module.exports = app