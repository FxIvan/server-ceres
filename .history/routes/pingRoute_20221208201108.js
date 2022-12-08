const { Router } = require('express')
const router = Router()
const ping = require('../scripts/ping')
const script_BorrarLog  = require('../scripts/borrarlogIp/borrarlog')
const fs = require('fs')
const { info } = require('console')


router.route('/')
.post(async(req,res)=>{
        const { infoip } = req.query
        
        const fs = require('fs')
        let today = new Date();
        let now = today.toLocaleString();
        var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});
        var log_fileIP = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});

        ping(infoip)

        log_file.write(`${now} | MSG | IP received. Will be perfommed a ping at ip ->  ${infoip} \n`)

        setTimeout(()=>{
                fs.readFile(`/home/eris/server-ceres/log/logPing/${infoip}logping.log`,(err,data)=>{
                        if (err){
                         res.json({message:'Erroe al leer el archivo', status:400});
                         log_file.write(`${now} | ERR | Error al ejecuta la libreria FS ->${err} \n`)
                        }
                        const dataString = data.toString();
                        res.json({message:dataString , status:200})
                        script_BorrarLog(infoip)
                     
                })

                log_file.write(`${now} | MSG | Se ejecuto libreria FS, que lee el log de la ip ->${infoip} \n`)
        },10000)
    
})


module.exports = router