module.exports = (interaction, commandObj) => {
    if (commandObj.devOnly) {
      if (interaction.member.id !== '123') {
        interaction.reply('This command is for the developer only');
        return true; // This must be added to stop the command from being executed.
      }
    }
  };