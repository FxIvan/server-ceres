const mongoose = require('mongoose')
require('dotenv').config()
const fs = require('fs')

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