const { Router } = require('express')
const router = Router()
const commandLinuxSchema = require('../models/linuxModel')
const fs = require('fs')
const moment = require('moment')
const timeMoment =  moment().format();

var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});
/* 
const fs = require('fs')
const timeMoment =  moment().format();
var log_file = fs.createWriteStream(process.cwd() + `/log/syncrodb.log`, {flags : 'a'});
log_file.write(`${timeMoment} | MSG | \n`)
*/

router.route('/')
.get(async(req,res)=>{
    const result_commandLinux = await commandLinuxSchema.find(function(err,docs){
        if(docs){
            console.log(result_commandLinux)
            res.json(result_commandLinux)
        }
        
    }
    )
    
})
.post(async(req,res)=>{
    const {title,comando,description,distribution} = req.query

    const newCommandSchema = new commandLinuxSchema({
        title,
        comando,
        description,
        distribution
    })

    await newCommandSchema.save()
    .then(()=>{
        res.json({message:'Guardado Exitosamente',status:201})
    })
    .catch(err=>{
        res.json({error:err,status:503})
    })

})

module.exports = router