const { Router } = require('express')
const router = Router()
const ping = require('../scripts/ping')

router.route('/')
.post(async(req,res)=>{
    const { infoip } = req.query

    
})

module.exports = router