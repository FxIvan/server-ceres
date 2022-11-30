const app = require('./app')
require('dotenv').config()

async function Main(){
    await app.listen(process.env.PORT_SERVER)
    console.log('Escuchando en el puerto -> ' , process.env.PORT_SERVER)
}

Main()