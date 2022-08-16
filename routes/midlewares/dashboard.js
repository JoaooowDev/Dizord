const router = require('express').Router();

function Autorizado(req, res, next) {
    if (req.user) {
        console.log('Usuário autenticado');
        console.log(req.user);
        next ();
    } else {
        console.log('Usuário não autenticado');
        res.redirect('/');
    }
}

router.get('/', Autorizado, (req, res) => {
    res.send(200);
}) 

router.get('/dashboard/settings', Autorizado, (req, res) => {
    res.send(200);
})

module.exports = router;