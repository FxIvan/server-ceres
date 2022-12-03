const mongoose = require('mongoose')
require('dotenv').config()
const fs = require('fs')

/* 
const fs = require('fs')
let today = new Date();
let now = today.toLocaleString();

var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});
log_file.write(`${now} | MSG | \n`)
    log_fileError.write(`${now} | ERR |  ${err} \n`)
*/
const timeMoment =  moment().format();
console.log("__dirname: ", __dirname);
console.log("process.cwd(): ", process.cwd());

var log_fileError = fs.createWriteStream( process.cwd() + '/log/error/syncrodbError.log', {flags : 'a'});
var log_file = fs.createWriteStream( process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>{
    let today = new Date();
    let now = today.toLocaleString();
    log_file.write(`${now} | MSG | Conectado de la DB \n`)
})
.catch(err=>{
    let today = new Date();
    let now = today.toLocaleString();
    log_fileError.write(`${now} | ERR | ERROR EN LA CONEXION DE LA DB -> ${err} \n`)
})