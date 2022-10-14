const Discord = require('discord.js')
const client = new Discord.Client({ intents: [3276799] });

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.type === Discord.ChannelType.DM) return;

    if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
        message.delete()
        let embed = new Discord.EmbedBuilder()
        .setColor('#000000')
        .setTitle('**Dizord**')
        .setThumbnail(client.user.avatarURL())
        .setDescription(`Olá <@${message.author.id}>, meu nome é **Dizord**!
        
        Estou aqui para tornar seu servidor mais divertido, envolvente e seguro. Com recursos para entreter e engajar seus membros, recursos de moderação para manter seu servidor sempre seguro e agradável, e com um poder de personalização fácil de configurar, porém inigualável...
        
        utilize \`/help\` ou \`d!help\` caso precise de ajuda.`)
        .setFooter({
            text: `© Dizord - Todos os direitos reservados`,
            iconURL: client.user.avatarURL()
        })

        message.channel.send({ embeds: [embed] })
    }
}