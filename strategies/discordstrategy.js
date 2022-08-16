const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const DiscordUser = require('../models/DiscordUser');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await DiscordUser.findById(id)
    if(user)
    done(null, user)
});

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'guilds']
}, async (acessToken, refreshToken, profile, done) => {
    try {
        const user = await DiscordUser.findOne({ discordId: profile.id });
        if(user) {
            console.log('O usuario existe')
            done(null, user)
        } else {
            console.log('O usuario não existe')
            const newUser = await DiscordUser.create({
                discordId: profile.id,
                username: profile.username
            })

            const savedUser = await newUser.save()
            done(null, savedUser)
        }
    } catch (err) {
        console.log(err)
        done(err, null)
    }
}))