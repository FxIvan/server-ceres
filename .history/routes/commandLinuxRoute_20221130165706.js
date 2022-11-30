const { Router } = require('express')
const { find } = require('../models/linuxModel')
const router = Router()
const commandLinuxSchema = require('../models/linuxModel')

router.route('/')
.get(async(req,res)=>{
    const result_commandLinux = await commandLinuxSchema.find()

    console.log(result_commandLinux)
})