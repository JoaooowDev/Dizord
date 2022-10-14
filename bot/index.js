const { Client } = require('discord.js')
const client = new Client({ intents: [3276799] });
const fs = require("fs");
const path = require("path");
const eventsFolder = path.join(__dirname,  'events')

var loginIniciado = false

function Eventos() {
    // Configurações
        // Eventos
            const eventFiles = fs.readdirSync(eventsFolder).filter(file => file.endsWith('.js'));
            for (const file of eventFiles) {
                const event = require(`${eventsFolder}/${file}`);
                client.on(file.split(".")[0], event.bind(null, client));
                try {
                    console.log(`    [Bot-Eventos] ${file} carregado com sucesso!`);
                } catch (err) {
                    console.log(`    [Bot-Eventos] ${file} não foi carregado!`);
                }
            }
}

const Login = new Promise((resolve, reject) => {
    client.login(process.env.BOT_TOKEN);
    loginIniciado = true
    resolve(loginIniciado)
})

module.exports = { Login, Eventos }