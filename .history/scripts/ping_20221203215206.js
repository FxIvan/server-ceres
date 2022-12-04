const { exec } = require("child_process");
const fs = require('fs')
let today = new Date();
let now = today.toLocaleString();

const script_Ping = (infoip) =>{

    console.log(infoip)
    
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