// Configurações Basicas
    require('dotenv').config();
    const express = require('express');
    const app = express();
    const session = require('express-session');
    const discordStrategy = require('./strategies/discordstrategy')
    const passport = require('passport');
    const PORT = process.env.PORT || 3000;
    app.use(express.static(__dirname + '/public'));
    const path = require('path');

//Session
    app.use(session({
        secret: 'secret random',
        resave: true,
        cookie: { maxAge: 60000 * 60 * 24 },
        saveUninitialized: false,
        name: 'discord.oauth2'
    }));

//View Engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/routes/views'));

// Passport
    app.use(passport.initialize());
    app.use(passport.session());

// Midleware
    const authRoute = require('./routes/midlewares/auth');
    const dashboardRoute = require('./routes/midlewares/dashboard');
    app.use('/auth', authRoute);
    app.use('/dashboard', dashboardRoute);

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