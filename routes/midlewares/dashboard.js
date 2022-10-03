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

    // - http://localhost:3000/dashboard/ID_DO_SERVIDOR
        router.get('/:serverid', Autorizado, async (req, res) => {
            const serverId = req.params.serverid
            const discordUserFound = await DiscordUser.findOne({ guilds: { '$elemMatch': { id: serverId } }})

            if (!discordUserFound) return res.redirect('/')

            const guild = discordUserFound.guilds.find(guild => guild.id === serverId)

            if ( guild.owner == false ) return res.redirect('/') 

            return res.render('servidor', {
                serverId: guild.id,
                serverName: guild.name,
                serverOwner: guild.owner
            })
        })

    // - http://localhost:3000/dashboard/settings


// - Exportação
    module.exports = router;