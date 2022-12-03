const mongoose = require('mongoose')
require('dotenv').config()
const fs = require('fs')
const moment = require('moment')
/* 
const fs = require('fs')
const timeMoment =  moment().format();
var log_file = fs.createWriteStream(__dirname + `/log/syncrodb.log`, {flags : 'a'});
log_file.write(`${timeMoment} | MSG | \n`)
*/
const timeMoment =  moment().format();
var log_fileError = fs.createWriteStream( __dirname + '..//log/error/syncrodbError.log', {flags : 'a'});
var log_file = fs.createWriteStream(__dirname + `/log/error/syncrodb.log`, {flags : 'a'});

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    log_file(`${timeMoment} | MSG | Conectado de la DB \n`)
})
.catch(err=>{
    log_fileError(`${timeMoment} | ERR | ERROR EN LA CONEXION DE LA DB -> ${err} \n`)
})