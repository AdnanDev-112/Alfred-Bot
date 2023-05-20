require('dotenv/config')
const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const path = require('path');
const { REST, Routes } = require('discord.js');
const { clientId,guildId } = require('./config.json');
const rest = new REST().setToken(process.env.BOT_TOKEN);
const mongoose = require('mongoose');

const client = new Client({ intents: [IntentsBitField.Flags.Guilds] });

// Connect to MongoDB
mongoose
//   .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// rest.delete(Routes.applicationCommand(clientId, '1102306164668117103'))
// 	.then(() => console.log('Successfully deleted application command'))
// 	.catch(console.error);
// rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
// 	.then(() => console.log('Successfully deleted all guild commands.'))
// 	.catch(console.error);

new CommandHandler({
    client,
    commandsPath: path.join(__dirname, 'commands'),
    eventsPath: path.join(__dirname, 'events'),
    testServer: '1102184640875339878',
    validationsPath: path.join(__dirname, 'validations')
})


client.login(process.env.BOT_TOKEN)