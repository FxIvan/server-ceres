const { Router } = require('express')
const router = Router()
const ping = require('../scripts/ping')
const fs = require('fs')


router.route('/')
.post(async(req,res)=>{
        const { infoip } = req.query
        
        const fs = require('fs')
        let today = new Date();
        let now = today.toLocaleString();
        var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

        ping(infoip)

        log_file.write(`${now} | MSG | IP received. Will be perfommed a ping at ip ->  ${infoip} \n`)

        readLog(infoip)
    
})


module.exports = router