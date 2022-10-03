// - Requisições
    const router = require('express').Router();
    const DiscordUser = require('../../models/DiscordUser');

// - Middleware
    function Autorizado(req, res, next) {
        if (req.user) {
            next ();
        } else {
            res.redirect('/');
        }
    }

// - Funções

// - Rotas   
    // - http://localhost:3000/dashboard
        router.get('/', Autorizado, (req, res) => {
            res.render('dashboard', {
                username: req.user.username,
                discordId: req.user.discordId,
                guilds: req.user.guilds,
                discriminator: req.user.discriminator,
                avatar: req.user.avatar
            })
        })

    // - http://localhost:3000/dashboard/admin
        router.get('/admin', Autorizado, (req, res) => {
            
            if( req.user.discordId === "939728555376537671" || req.user.discordId === "447934597179637760" || req.user.discordId === "355411377827086336" ) {
                res.render('dashAdmin')
            } else {
                res.redirect('serverFalse')
            }

        })

    // - http://localhost:3000/dashboard/ID_DO_SERVIDOR
        router.get('/:serverid', Autorizado, async (req, res) => {
            // Recebendo o parametro
                const serverId = req.params.serverid
            // Buscando a guilda com o id do parametro
                    const discordUserFound = await DiscordUser.findOne({ guilds: { '$elemMatch': { id: serverId } }})
            // Caso a guilda do id do parametro nao exista
                    if (!discordUserFound) return res.render('serverFalse')
            // Buscando os dados da guilda
                    const guild = discordUserFound.guilds.find(guild => guild.id === serverId)
            // Verificando se é dono da guilda
                if ( guild.owner == false ) return res.render('ownerFalse')

            return res.render('servidor', {
                serverId: guild.id,
                serverName: guild.name,
                serverOwner: guild.owner
            })
        })
    


    // - http://localhost:3000/dashboard/settings


// - Exportação
    module.exports = router;