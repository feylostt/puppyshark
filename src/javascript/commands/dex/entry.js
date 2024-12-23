const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('dex')
        .setDescription('Get a pokemon dex entry.'),
    async execute(interaction) {
        
    }
};