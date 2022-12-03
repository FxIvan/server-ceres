const mongoose = require('mongoose')
require('dotenv').config()
const fs = require('fs')
/* 
const fs = require('fs')
const timeMoment =  moment().format();
var log_file = fs.createWriteStream(__dirname + `/log/syncrodb.log`, {flags : 'a'});
log_file.write(`${timeMoment} \n`)
*/
const timeMoment =  moment().format();
var log_file = fs.createWriteStream(__dirname + `/log/error/syncrodbError.log`, {flags : 'a'});

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Conectado a MongoDB')
})
.catch(err=>{
    console.log('Error')
})