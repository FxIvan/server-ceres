const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (res,req)=>{
    res.send('Estas dentro de la ruta principal')
})

module.exports = app