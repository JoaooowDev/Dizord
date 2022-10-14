const mongoose = require('mongoose')

const serverSchema = new mongoose.Schema({
    idServidor: { type: Number, required: true},
    nomeServidor: { type: String, required: true },
    Plano: { type: String, required: true, default: 'free'},
    Booster: { type: Array, required: true}
})

const DiscordServer = module.exports = mongoose.model('servidores', serverSchema)
