const app = require('./app')
require('dotenv').config()
const moment = require('moment')
const fs = require('fs')
require('./scripts/ping')

var log_file = fs.createWriteStream(__dirname + `/log/syncrodb.log`, {flags : 'a'});


async function Main(){
    let today = new Date();
    let now = today.toLocaleString();

    await app.listen(process.env.PORT_SERVER)
    log_file.write(`${now} | MSG | Servidor levantado por el puerto -> ${process.env.PORT_SERVER} \n`)

    script_Ping()
}

Main()