// Dependências 
    const mongoose = require('mongoose');

// Conectando ao banco de dados
    module.exports = mongoose.connect('mongodb://localhost:27017/discordauth', { useNewUrlParser: true, useUnifiedTopology: true });