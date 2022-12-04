const { exec } = require("child_process");
const fs = require('fs')
let today = new Date();
let now = today.toLocaleString();

const script_Ping = (infoip) =>{

    console.log(infoip)

    var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

    log_file.write(`${now} | MSG |  Analyzing PING to the IP -> ${infoip} .....\n`)

    exec( `/home/eris/server-ceres/scripts/ping.sh ${infoip}` , (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
           console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    
}

module.exports = script_Ping