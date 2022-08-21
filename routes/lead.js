const routes = require('express').Router();

routes.get('/', Autorizado, (req, res) => {
    res.render('index');
});

routes.get('/comandos', (req, res) => {
    res.render('comandos');
})

routes.get('/planos', (req, res) => {
    res.render('planos');
})


// Verificações
function Autorizado(req, res, next) {
    if (req.user) {
        console.log('Usuário autenticado');
        res.redirect('/dashboard')
    } else {
        console.log('Usuário não autenticado');
        next();
    }
}

module.exports = routes;