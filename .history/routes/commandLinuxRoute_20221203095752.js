const { Router } = require('express')
const router = Router()
const commandLinuxSchema = require('../models/linuxModel')

router.route('/')
.get(async(req,res)=>{
    const result_commandLinux = await commandLinuxSchema.find()
    res.json(result_commandLinux)
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