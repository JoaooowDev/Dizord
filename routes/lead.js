const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render('index');
});

routes.get('/comandos', (req, res) => {
    res.render('comandos');
})

routes.get('/planos', (req, res) => {
    res.render('planos');
})

module.exports = routes;