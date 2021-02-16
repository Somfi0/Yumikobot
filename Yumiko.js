const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const client = new Discord.Client(); // Объявляем, что robot - бот
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js  
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс
const comms = require("./commands.js");
const welcome = require("./welcome.js");

client.on("ready", function () {
        console.log(` Господин я ${client.user.tag} включилась!! `)
        
        welcome(client)
        
        client.user.setStatus("dnd")
        client.user.setPresence({
          status: "dnd",
          activity: {
            type: "WATCHING",
            name: "за сервером Yumiko"
          }
        })
        
    });
client.on('guildMemberAdd', member => {
    const channelId = '810941652004503563'

    const channel = member.guild.channels.cache.get(channelId)
    channel.send({embed: {
    color: ("#f5ec42"),
    title: "Приветствие",
    description: `Приветствую тебя <@${member.id}> на нашем сервере Yumiko`,
    "image": {
    "url": "https://media.discordapp.net/attachments/751078000430284912/805450212298326016/image_860911170005395524955.gif"
    }
  })
});

    client.on('message', (msg) => { // Реагирование на сообщения
        if (msg.author.username != client.user.username && msg.author.discriminator != client.user.discriminator) {
          var comm = msg.content.trim() + " ";
          var comm_name = comm.slice(0, comm.indexOf(" "));
          var messArr = comm.split(" ");
          for (comm_count in comms.comms) {
            var comm2 = prefix + comms.comms[comm_count].name;
            if (comm2 == comm_name) {
              comms.comms[comm_count].out(client, msg, messArr);
            }
          }
        }
      });

    client.login(token);
