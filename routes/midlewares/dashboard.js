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
    res.render('dashboard', {
        username: req.user.username,
        discordId: req.user.discordId,
        guilds: req.user.guilds,
        discriminator: req.user.discriminator,
        avatar: req.user.avatar
    })
})


router.get('/servidor', Autorizado, (req, res) => {
    res.render('controler')
})

router.get('/dashboard/settings', Autorizado, (req, res) => {
    res.send(200);
})

module.exports = router;