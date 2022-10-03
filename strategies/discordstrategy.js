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
        const user = await DiscordUser.findOneAndUpdate({ discordId: profile.id }, {username: profile.username, guilds: profile.guilds, discriminator: profile.discriminator, avatar: profile.avatar}, {new: true, upsert: true});
        if(user) {
            done(null, user)
        } else {
            const newUser = await DiscordUser.create({
                discordId: profile.id,
                username: profile.username,
                guild: profile.guilds,
                discriminator: profile.discriminator
            })

            const savedUser = await newUser.save()
            done(null, savedUser)
        }
    } catch (err) {
        console.log(err)
        done(err, null)
    }
}))