const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');

bot.on('ready', () => {
    console.log('I\'m Onlline');
})

bot.on('message', message => {
    if (message.author.bot) return;
    // if (!message.content.startsWith(prefix)) return;

    if (message.content === 'ควย') {
        message.channel.sendMessage('ควยพ่อง');
    } else {
        message.channel.sendMessage(message.content);
    }
});

bot.login(settings.token);