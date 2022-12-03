const app = require('./app')
require('dotenv').config()
const moment = require('moment')
const fs = require('fs')

var log_file = fs.createWriteStream(__dirname + `/log/syncrodb.log`, {flags : 'a'});


async function Main(){
    let today = new Date();
    let now = today.toLocaleString();

    await app.listen(process.env.PORT_SERVER)
    log_file.write(`${now} | MSG | Servidor levantado por el puerto -> ${process.env.PORT_SERVER} \n`)

    const { exec } = require("child_process");

exec("dir", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    //if (stderr) {
    //    console.log(`stderr: ${stderr}`);
     //   return;
    //}
    console.log(`stdout: ${stdout}`);
});
}

Main()