const { Router } = require('express')
const router = Router()
const commandLinuxSchema = require('../models/linuxModel')
const fs = require('fs')


var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});
var log_fileError = fs.createWriteStream(process.cwd() + `/log/error/syncrodbError.log`, {flags : 'a'});

router.route('/')
.get(async(req,res)=>{
    const result_commandLinux = await commandLinuxSchema.find()

    if(result_commandLinux.length === 0){
        let today = new Date();
        let now = today.toLocaleString();
        log_file.write(`${now} | MSG | No hay informacion \n`)
    }

    if(result_commandLinux){
        let today = new Date();
        let now = today.toLocaleString();

        res.json(result_commandLinux)
        log_file.write(`${now} | MSG | Peticion GET exitosa, COMANDO  -> ${result_commandLinux.map(x=> x.comando)}\n`)
    }
})
.post(async(req,res)=>{
    const {title,comando,description,distribution} = req.query

    if( title !== undefined && comando !== undefined && description !== undefined && distribution !== undefined){
        const newCommandSchema = new commandLinuxSchema({
            title,
            comando,
            description,
            distribution
        })

        await newCommandSchema.save()
        .then(()=>{
            let today = new Date();
            let now = today.toLocaleString();

            log_file.write(`${now} | MSG | Peticion POST exitosa, se guardo el comando -> ${comando}\n`)
            res.json({message:'Guardado Exitosamente',status:201})
        })
        .catch(err=>{
            let today = new Date();
            let now = today.toLocaleString();

            res.json({error:err,status:503})
            log_fileError.write(`${now} | ERR | ERROR en la peticion POST -> ${err} \n`)
        })
    }else{
        let today = new Date();
        let now = today.toLocaleString();

        res.json({message:'Algunos de los campos no fue ingresado', status:400})
        log_file.write(`${now} | ERR | Algunos de los Campos no fue ingresado \n`)
    }


})

module.exports = router