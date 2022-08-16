// Configurações Basicas
    require('dotenv').config();
    const express = require('express');
    const app = express();
    const session = require('express-session');
    const passport = require('passport');
    const PORT = process.env.PORT || 3000;
    app.use(express.static(__dirname + '/public'));

//Session
    app.use(session({
        secret: 'secret random',
        resave: false,
        saveUninitialized: false,
        name: 'discord.oauth2'
    }));

// Banco de Dados
    const db = require('./database/database');
    db.then(() => console.log('Banco de dados conectado')).catch(err => console.log(err));

// Configurações de Rotas
    const lead = require('./routes/lead');
    app.use('/', lead);
    app.use('/comandos', lead);
    app.use('/planos', lead);


// Iniciando Servidor
    app.listen(PORT, () => {
        console.log(`Servidor iniciado na porta http://localhost:${PORT}/`);
    });