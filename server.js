const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready', () => {
    console.log('I\'m Onlline');
})

client.on('message', message => {
    if (message.content === 'ควย') {
        message.channel.sendMessage('ควยพ่อง');
    }
});

client.login(settings.token);
