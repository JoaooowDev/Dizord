const Discord = require("discord.js");


module.exports = async (client, member) => {

    member.roles.add("1005134214632570890");

    // Enviar embed ao entrar no servidor
    let embed = new Discord.EmbedBuilder()
        .setThumbnail(client.user.avatarURL())
        .setColor("#000000")
        .setTitle("Dizord | Oficial")
        .setImage("https://cdn.discordapp.com/attachments/1005501075186532394/1005576954126274662/standard.gif")
        .setURL("https://discord.gg/gJ8rfnvMft")
        .setDescription(`Olá <@${member.id}>, seja bem-vindo(a) ao servidor **Dizord**!
  
      Com a **DIZORD** você pode:
      
      🎮 **Jogar tranquilo**
      *Sempre aparece algum problema quando estamos jogando, que tal não precisar perder tempo com isso?*
      
      ⚙ **Gerenciar facilmente**
      *Sabemos o quanto é difícil gerenciar um servidor, por isso facilitamos e com a **Dizord** você não precisa se preocupar, com poucos clicks você consegue fazer diversas coisas!*
      
      💰 **Recursos grátis e premium**
      *A melhor parte da **Dizord** é que você pode escolher quanto ou quão pouco quer gastar. Você pode escolher entre uma versão gratuita e uma versão premium, ambas igualmente úteis.*
      
      👨‍💻 **Prevenção contra hackers**
      *A **Dizord** tem um dos melhores sistemas de segurança para seu servidor, protegendo todos os canais, categorias e conteúdos de forma com que qualquer invasor não consiga ter sucesso!*
      
      🛒 *Além dessas e outras várias vantagens, você pode personalizar seu bot por completo em questão de segundos!*`)
        .setTimestamp()
        .setFooter({
            text: `© Dizord - Todos os direitos reservados`,
            iconURL: client.user.avatarURL()
        });
    try {
        member.send({ embeds: [embed] }).then(async msg => {
            msg.react("🇺🇸")
            const filter = (reaction, user) => reaction.emoji.name === "🇺🇸" && user.id === member.id;
            const collector = msg.createReactionCollector({ filter, time: 60000 });
            collector.on("collect", async (reaction, user) => {
                if (reaction.emoji.name === "🇺🇸") {
                    msg.delete();
                    let embed1 = new Discord.EmbedBuilder()
                        .setThumbnail(client.user.avatarURL())
                        .setColor("#000000")
                        .setTitle("Dizord | Oficial")
                        .setImage("https://cdn.discordapp.com/attachments/1005501075186532394/1005576954126274662/standard.gif")
                        .setURL("https://discord.gg/gJ8rfnvMft")
                        .setDescription(`Hello <@${member.id}>, welcome to the **Dizord** server!
      
                  With **DIZORD** you can:
                  
                  🎮 **Play quietly**
                  *We always have some problem when we're playing, how about not having to waste time with it?*
                  
                  ⚙ **Manage easily**
                  *We know how difficult it is to manage a server, so we make it easy and with **Dizord** you don't have to worry, with a few clicks you can do many things!*
                  
                  💰 **Free and premium resources**
                  *The best part of **Dizord** is that you can choose how much or how little you want to spend. You can choose between a free version and a premium version, both equally useful.*
                  
                  👨‍💻 **Prevention against hackers**
                  *The **Dizord** has one of the best security systems for your server, protecting all channels, categories and content in such a way that any invader cannot succeed!*
                  
                  🛒 *In addition to these and other many advantages, you can customize your bot completely in a matter of seconds!*`)
                        .setTimestamp()
                        .setFooter({
                            text: `© Dizord - All rights reserved`,
                            iconURL: client.user.avatarURL()
                        });
                    member.send({ embeds: [embed1] }).then(async msg => {
                        msg.react("🇧🇷")
                        const filter = (reaction, user) => reaction.emoji.name === "🇧🇷" && user.id === member.id;
                        const collector = msg.createReactionCollector({ filter, time: 60000 });
                        collector.on("collect", async (reaction, user) => {
                            if (reaction.emoji.name === "🇧🇷") {
                                msg.delete();
                                let embed2 = new Discord.EmbedBuilder()
                                    .setThumbnail(client.user.avatarURL())
                                    .setColor("#000000")
                                    .setTitle("Dizord | Oficial")
                                    .setImage("https://cdn.discordapp.com/attachments/1005501075186532394/1005576954126274662/standard.gif")
                                    .setURL("https://discord.gg/gJ8rfnvMft")
                                    .setDescription(`Olá <@${member.id}>, seja bem-vindo(a) ao servidor **Dizord**!
      
                        Com a **DIZORD** você pode:
                        
                        🎮 **Jogar tranquilo**
                        *Sempre aparece algum problema quando estamos jogando, que tal não precisar perder tempo com isso?*
                        
                        ⚙ **Gerenciar facilmente**
                        *Sabemos o quanto é difícil gerenciar um servidor, por isso facilitamos e com a **Dizord** você não precisa se preocupar, com poucos clicks você consegue fazer diversas coisas!*
                        
                        💰 **Recursos grátis e premium**
                        *A melhor parte da **Dizord** é que você pode escolher quanto ou quão pouco quer gastar. Você pode escolher entre uma versão gratuita e uma versão premium, ambas igualmente úteis.*
                        
                        👨‍💻 **Prevenção contra hackers**
                        *A **Dizord** tem um dos melhores sistemas de segurança para seu servidor, protegendo todos os canais, categorias e conteúdos de forma com que qualquer invasor não consiga ter sucesso!*
                        
                        🛒 *Além dessas e outras várias vantagens, você pode personalizar seu bot por completo em questão de segundos!*`)
                                    .setTimestamp()
                                    .setFooter({
                                        text: `© Dizord - Todos os direitos reservados`,
                                        iconURL: client.user.avatarURL()
                                    });
                                member.send({ embeds: [embed2] });
                            }
                        });
                    });
                }
            });
        });
    } catch {
        console.log("[ERRO] Nao foi possivel enviar mensagem com o evento guild member join")
    }
}