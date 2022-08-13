const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

routes.get('/comandos', (req, res) => {
    res.sendFile(__dirname + '/views/comandos.html');
})

module.exports = routes;