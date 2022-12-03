const { exec } = require("child_process");

const script_Ping = (infoip) =>{

    console.log(infoip)
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

module.exports = script_Ping