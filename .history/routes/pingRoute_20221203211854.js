const { exec } = require("child_process");

const script_Ping = (infoip) =>{

const fs = require('fs')
let today = new Date();
let now = today.toLocaleString();
var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

   exec(`/home/eris/server-ceres/scripts/ping.sh ${infoip} ` , (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);

        log_file.write(`${now} | MSG | Realizando ..... PING a la IP ->  ${infoip} \n`)
    });
    
}

module.exports = script_Ping