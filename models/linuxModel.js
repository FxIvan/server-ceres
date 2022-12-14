const { Schema , model } = require('mongoose')

const commandLinux = new Schema({
    title:String,
    comando:String,
    description:String,
    distribution:String,
    date: { type: Date, default: Date.now }
})

const commandLinuxSchema = model('commandLibrary', commandLinux)


module.exports = commandLinuxSchema