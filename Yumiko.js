const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const client = new Discord.Client(); // Объявляем, что robot - бот
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js  
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс
const comms = require("./commands.js");

client.on("ready", function () {
        console.log(` Господин я ${client.user.tag} включилась!! `);
        client.user.setStatus("dnd")
        client.user.setPresence({
          status: "dnd",
          activity: {
            type: "WATCHING",
            name: "за сервером Yumiko"
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
client.on('guildMemberAdd', member => {
client.on('message', 


var role = member.guild.roles.find('811144795372126229', '811144795372126229'); // Variable to get channel ID
member.addRole(role); // Adds the default role to members

member.guild.channels.get('810941652004503563').send({embed: {
color: 3447003,
title: "**SERVER NAME** Welcome Bot!",
url: "WEBSITE URL",
description: "Welcome *" + member + "* to the **Server name** discord server!",
fields: [{
    name: "Information",
    value: "Some info on the server"
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© NAME OF SERVER 2018 - 2019"
}
}}); });
  });

    client.login(token);
