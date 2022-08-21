const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    username: { type: String, required: true },
    guilds: { type: Array, required: true },
    discriminator: { type: String, required: true },
    avatar: { type: String, required: true }
})

const DiscordUser = module.exports = mongoose.model('User', userSchema);