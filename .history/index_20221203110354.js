const app = require('./app')
require('dotenv').config()

const moment = require('moment')
const fs = require('fs')
const timeMoment =  moment().format();

/*****************
const fs = require('fs')
const timeMoment =  moment().format();
var log_file = fs.createWriteStream(__dirname + `/log/syncrodb.log`, {flags : 'a'});
log_file.write(`${timeMoment} \n`)
*****************/
var log_file = fs.createWriteStream(__dirname + `/log/syncrodb.log`, {flags : 'a'});


async function Main(){
    await app.listen(process.env.PORT_SERVER)
    log_file.write(`${timeMoment} | MSG | Servidor levantado por el puerto -> ${process.env.PORT_SERVER} \n`)
}

Main()