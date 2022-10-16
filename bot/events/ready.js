const { Client, GuildManager } = require('discord.js')
const client = new Client({ intents: [3276799] });
const dayjs = require('dayjs')
var cron = require('node-cron');
const DiscordServer = require('../../models/DiscordServer')


module.exports = async (client) => {
    console.log('    [Bot] Online')
    console.log('    [Dia]', dayjs().format('DD-MM-YYYY'))

    var meses = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0
    }

    cron.schedule('*/2 * * * * *', async () => {

        const DataAtual = dayjs().format('MM')

        const teste1 = await DiscordServer.find()

        teste1.forEach(servidor => {
            console.log(servidor.idServidor)
        })
        
        // console.log('Resultado: ', meses[DataAtual], ' Mes: ', DataAtual)
        // meses[DataAtual] = 50
        // console.log(meses[DataAtual])

    }, {
        timezone: "America/Sao_Paulo"
    });

    // cron.schedule('0 0 28,29,30,31 * *', () => {

    //     const DataAtual = dayjs().format('MM')
        
    //     console.log('Resultado: ',meses[DataAtual])


    // }, {
    //     timezone: "America/Sao_Paulo"
    // });

}

    // cron.schedule('* * * * *', () => {

    //     if (dayjs().format('DD-MM') == '15-10') {
    //         console.log('Dia correto')
    //     } else {
    //         console.log('Dia incorreto')
    //     }
    // });




// var guild = await client.guilds.fetch('1004637222932336642')
// console.log(guild)