const { exec } = require("child_process");
const fs = require('fs')
let today = new Date();
let now = today.toLocaleString();

const script_BorrarLog = (infoip) =>{

    var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

    log_file.write(`${now} | MSG |  Borrando el log de la IP -> ${infoip}\n`)

    exec( `/home/eris/server-ceres/scripts/borrarlogIp/borrarlog.sh ${infoip}`)
    
}

module.exports = script_BorrarLog 