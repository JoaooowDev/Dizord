// - Requisições
    const router = require('express').Router();
    const DiscordUser = require('../../models/DiscordUser');
    const DiscordServer = require('../../models/DiscordServer')

// - Middleware
    function Autorizado(req, res, next) {
        if (req.user) {
            next ();
        } else {
            res.redirect('/');
        }
    }

    async function midServerId (req, res, next) {
        const serverId = req.params.serverid
        const discordUserFound = await DiscordUser.findOne({ guilds: { '$elemMatch': { id: serverId } }})
        if (!discordUserFound) return 
        const guild = discordUserFound.guilds.find(guild => guild.id === serverId)
        
        if( guild.owner == true ) {

            const discordServerFound = await DiscordServer.findOne({ idServidor: guild.id })

            if (!discordServerFound) {
                const newServer = await DiscordServer.create({
                    idServidor: guild.id,
                    Plano: "free",
                    nomeServidor: guild.name
                })
                await newServer.save()
                next()
                
            } else {
                next()
            }

        } else {
            res.render('ownerFalse', {
                username: req.user.username,
                discordId: req.user.discordId,
                guilds: req.user.guilds,
                discriminator: req.user.discriminator,
                avatar: req.user.avatar
            })
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

    // - http://localhost:3000/dashboard/admin
        router.get('/admin', Autorizado, (req, res) => {
            
            if( req.user.discordId === "939728555376537671" || req.user.discordId === "447934597179637760" || req.user.discordId === "355411377827086336" ) {
                res.render('dashAdmin')
            } else {
                res.redirect('/')
            }

        })

    // - http://localhost:3000/dashboard/ID_DO_SERVIDOR
        router.get('/:serverid', Autorizado, midServerId, async (req, res) => {
            const servidor = await DiscordServer.findOne({ idServidor: req.params.serverid })
            res.render('servidor', {
                idDoServidor: servidor.idServidor,
                username: req.user.username,
                discordId: req.user.discordId,
                guilds: req.user.guilds,
                discriminator: req.user.discriminator,
                avatar: req.user.avatar,
                plano: servidor.Plano
            })
        })

    // - http://localhost:3000/dashboard/ID_DO_SERVIDOR/administracao
        router.get('/:serverid/administracao', Autorizado, midServerId, async (req, res) => {
            const servidor = await DiscordServer.findOne({ idServidor: req.params.serverid})
            res.render('administracao', {
                idDoServidor: servidor.idServidor
            })
        })

// - Exportação
    module.exports = router;