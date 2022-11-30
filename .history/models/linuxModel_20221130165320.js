const { Schema } = require('mongoose')

const commandLinux = new Schema({
    title:String,
    comando:String,
    descripcion:String,
    distribucion:String,
    date: { type: Date, default: Date.now }
})