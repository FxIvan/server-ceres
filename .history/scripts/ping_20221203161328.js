const { exec } = require("child_process");

const script_Ping = () =>{
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

script_Ping()