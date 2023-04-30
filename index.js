require('dotenv/config')
const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const path = require('path')

const client = new Client({ intents: [IntentsBitField.Flags.Guilds] });
new CommandHandler({
    client,
    commandsPath: path.join(__dirname, 'commands'),
    eventsPath: path.join(__dirname, 'events'),
    testServer: '1102184640875339878',
    validationsPath: path.join(__dirname, 'validations')
})


client.login(process.env.BOT_TOKEN)