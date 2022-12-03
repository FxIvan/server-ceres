const fs = require('fs')
let today = new Date();
let now = today.toLocaleString();

var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});
log_file.write(`${now} | MSG | \n`)
log_fileError.write(`${now} | ERR |  ${err} \n`)