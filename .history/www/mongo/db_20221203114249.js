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
console.log("__dirname: ", __dirname);
console.log("process.cwd(): ", process.cwd());

var log_fileError = fs.createWriteStream( process.cwd() + '/log/error/syncrodbError.log', {flags : 'a'});
var log_file = fs.createWriteStream( process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    log_file.write(`${timeMoment} | MSG | Conectado de la DB \n`)
})
.catch(err=>{
    log_fileError.write(`${timeMoment} | ERR | ERROR EN LA CONEXION DE LA DB -> ${err} \n`)
})