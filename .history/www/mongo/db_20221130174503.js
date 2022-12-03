const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Conectado a MongoDB')
})
.catch(err=>{
    console.log('Error')
})