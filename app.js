// Configurações Basicas
    require('dotenv').config();
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;
    app.use(express.static(__dirname + '/public'));

// Configurações de Rotas
    const lead = require('./routes/lead');
    app.use('/', lead);
    app.use('/comandos', lead);
    app.use('/planos', lead);

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta http://localhost:${PORT}/`);
})

