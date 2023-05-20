const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    run: async ({ interaction, client, handler }) => {
        const commandName = interaction.commandName
        if (commandName === 'config') {
            const reason = interaction.options.getString('input');
            await interaction.deferReply();
            await interaction.editReply("Created Successfully");
        }
    },
    data: new SlashCommandBuilder().setName('config')
        .setDescription("Config").addStringOption(option =>
            option.setName('input')
                .setDescription('What Can I help with?')
                .setRequired(true)
        )
        ,

    devOnly: true,
}