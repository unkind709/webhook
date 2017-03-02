process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./config/settings.json');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000');


var Brain = require('mongoose').model('Brain');

bot.on('ready', () => {
    console.log('I\'m Onlline');
})

bot.on('message', message => {
    if (message.author.bot) return;
    // if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    if (command === '!add') {
        let args = message.content.split(" ").slice(1);
        let data = args.map(n => n);
        // message.channel.sendMessage(req[0]+ " "+req[1]);
        var req = {
            input: data[0],
            output: data[1]
        }
        var brain = new Brain(req);
        brain.save(function (err) {
            if (err) {
                return;
            } else {
                message.channel.sendMessage(brain);
            }
        });
    } else if (message.content === '!list') {
        Brain.find({}, function (err, brains) {
            if (err) {
                return;
            } else {
                message.channel.sendMessage(brains);
            }
        });
    } else {
        Brain.find({input: message.content}, function (err, brains) {
            if (err) {
                return;
            } else {
                let index = Math.floor(Math.random()* brains.length);
                message.channel.sendMessage(brains[index].output);
            }
        });
    }
});

bot.login(settings.token);

