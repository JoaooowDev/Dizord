// Configurações Basicas
    require('dotenv').config();
    const express = require('express');
    const app = express();
    const session = require('express-session');
    const discordStrategy = require('./strategies/discordstrategy')
    const MongoStore = require('connect-mongo');
    const passport = require('passport');
    const db = require('./database/database');
    const PORT = process.env.PORT || 3000;
    app.use(express.static(__dirname + '/public'));
    const path = require('path');
    const mongoose = require('mongoose')

//Session
    app.use(session({
        secret: 'unicornio saltitante com cabeca de macaco',
        cookie: { maxAge: 60000 * 60 * 24 },
        saveUninitialized: false,
        resave: false,
        name: 'discord.oauth2',
        store: MongoStore.create({ 
            mongoUrl: 'mongodb://localhost:27017/discordauth',
            autoRemove: 'interval',
            autoRemoveInterval: 10
        })
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
    app.use('/servidor', dashboardRoute);

// Banco de Dados
    db.then(() => console.log('    [Banco de Dados] Iniciado')).catch(err => console.log('[Banco de dados] Erro ao conectar: ' + err));

// Configurações de Rotas
    const lead = require('./routes/lead');
    app.use('/', lead);
    app.use('/comandos', lead);
    app.use('/planos', lead);

// Iniciando Servidor
    app.listen(PORT, () => {
        console.log(`    [Servidor] http://localhost:${PORT}/`);
    });

// Console
    const { meuConsole } = require('./console/consoleclear')
    meuConsole()