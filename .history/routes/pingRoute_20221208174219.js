const { Router } = require('express')
const router = Router()
const ping = require('../scripts/ping')
const fs = require('fs')

router.route('/')
.post((req,res)=>{
        const { infoip } = req.query
        
        const fs = require('fs')
        let today = new Date();
        let now = today.toLocaleString();
        var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

        ping(infoip)

        log_file.write(`${now} | MSG | IP received. Will be perfommed a ping at ip ->  ${infoip} \n`)

        setTimeout(()=>{
                console.log('Se ejecuto el SetTimeOut')
                fs.readFile(`/home/eris/server-ceres/log/logPing/${infoip}logping.log`,(err,data)=>{
                        if (err) return console.error(err);
                        const dataString = data.toString();
                        console.log(dataString);
                })
        },10000)
    
})

module.exports = router