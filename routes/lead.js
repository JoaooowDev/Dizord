const routes = require('express').Router();

routes.get('/', Autorizado, (req, res) => {
    res.render('index');
});

routes.get('/comandos', (req, res) => {
    res.render('comandos');
})

routes.get('/planos', Autorizado, (req, res) => {
    res.render('planos');
})



// Verificações
function Autorizado(req, res, next) {
    if (req.user) {
        res.redirect('/dashboard')
    } else {
        next();
    }
}

module.exports = routes;