const { exec } = require("child_process");
const fs = require('fs')
let today = new Date();
let now = today.toLocaleString();

const script_Ping = (infoip) =>{

    var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

    log_file.write(`${now} | MSG |  Analyzing PING to the IP -> ${infoip} .....\n`)

    exec( `/home/eris/server-ceres/scripts/ping.sh ${infoip}`)
    
}

module.exports = script_Ping