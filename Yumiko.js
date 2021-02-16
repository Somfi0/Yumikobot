const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const client = new Discord.Client(); // Объявляем, что robot - бот
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js  
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс
const comms = require("./commands.js");


client.on("ready", function () {
        console.log(` Господин я ${client.user.tag} включилась!! `)  
        client.user.setStatus("dnd")
        client.user.setPresence({
          status: "dnd",
          activity: {
            type: "WATCHING",
            name: "за сервером Yumiko"
          }
        })
        
    });

client.on('guildMemberAdd', (member) => {
    let chanellId = '811247441666899968';
    let rules = '786897035457724436';
    let chat = '786858058323722241';
    let color = '805885775764783154';
    let gender = '786896546247213056';
    let otzw = '786897485977223168';
    let role = member.guild.roles.cache.find(role => role.name === '︴ 𝕐𝕦𝕞𝕚𝕜𝕠'); // Variable to get channel ID
    member.roles.add(role);
    let embed = new Discord.MessageEmbed()
    .setDescription(`**▨Приветствую тебя <@${member.id}> на нашем сервере 𝘠𝘶𝘮𝘪𝘬𝘰. Здесь тебя ждёт дружелюбная администрация, крутое оформление сервера, а самое главное, наш собственный бот! Прежде чем ты начнёшь что-то делать, прочти ${member.guild.channels.cache.get(rules).toString()}, а потом можешь пойти общаться в ${member.guild.channels.cache.get(chat).toString()}. Если у вас есть желание можете изменить цвет своего имени здесь ${member.guild.channels.cache.get(color).toString()}, а чтобы выбрать пол зайдите сюда ${member.guild.channels.cache.get(gender).toString()}. Также можете оставить отзыв здесь ${member.guild.channels.cache.get(otzw).toString()}. Желаю вам приятного времяпровождения на нашем сервере!:kissing_heart:▨**`)
    .setColor('#f5ec42')
    .setImage('https://media.discordapp.net/attachments/751078000430284912/805450212298326016/image_860911170005395524955.gif')
    .setTimestamp()
    client.channels.cache.get(chanellId).send(embed)
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
