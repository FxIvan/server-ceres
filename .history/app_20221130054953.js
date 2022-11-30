const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Dentro de la ruta principal')
})

module.exports = app