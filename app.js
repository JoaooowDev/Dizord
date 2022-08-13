// Configurações Basicas
    require('dotenv').config();
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT;
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/pages'));

// Configurações de Rotas
    const lead = require('./routes/lead');
    app.use('/', lead);

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta http://`)
})