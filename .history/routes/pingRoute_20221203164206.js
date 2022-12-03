const { Router } = require('express')
const router = Router()

router.route('/')
.post(async(req,res)=>{
    const { infoip } = req.query

    console.log(infoip)
})

module.exports = router