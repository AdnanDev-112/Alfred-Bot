const { SlashCommandBuilder } = require('discord.js');
const User = require('../models/User.js')

module.exports = {
    run: async ({ interaction, client, handler }) => {
        const commandName = interaction.commandName
        if (commandName === 'create') {
            try {
                await interaction.deferReply({ ephemeral: true });
                // Get the user ID
                const userId = interaction.user.id;
                // Check user exists
                const userDoc = await User.findOne({ userId });
                if (!userDoc) {
                    User.create({
                        userId
                    });
                    await interaction.editReply({ content: "Created Successfully", ephemeral: true });
                } else {
                    await interaction.editReply({ content: "Profile Already Exists", ephemeral: true });

                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    },
    data: new SlashCommandBuilder().setName('create')
        .setDescription("Create your profile"),
    devOnly: true,
}