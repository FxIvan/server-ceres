const express = require('express')
const app = express()

async function Main(){
    await app.listen('3000')
    console.log('Escuchando en el puerto 3000')
}

Main()