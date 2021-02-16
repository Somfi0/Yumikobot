const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс
const crygif = require('./cry.json');
// Команды //

function test(client, mess, args) {
var role = mess.guild.roles.cache.find(role => role.id === "805204670699012116");
var user = mess.guild.members.cache.get('699865741276610630');
user.roles.add(role)
};

function clear(client,mess,args) {
  const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
  const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
  if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
  if (isNaN(amount)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 
  
  if (amount > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз'); // Проверка, является ли ввод пользователя числом больше 100
  if (amount < 1) return mess.channel.send('Вы должны ввести число больше чем 1'); // Проверка, является ли ввод пользователя числом меньше 1
  
  async function delete_messages() { // Объявление асинхронной функции
  
      await mess.channel.messages.fetch({
          limit: amount
      }).then(messages => {
          mess.channel.bulkDelete(messages)
          mess.channel.send(`Удалено ${amount} сообщений!`)
      })
  };
  delete_messages(); // Вызов асинхронной функции
};

function gender(client,mess,args) {
  mess.channel.send({embed: {
    color: ("#f5ec42"),
    title: "Выберете свой пол:",
    description: ("<a:1854_Ribbon_White:805851992886870027> : Девушка‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ≀‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Парень : <a:9849_Ribbon_Black:805851979481612319>"),
    "image": {
      "url": "https://media.discordapp.net/attachments/799228340040499220/805846498733457488/c21d8bea83706009d0ab494a52076b08.gif?width=400&height=226"
    },
  }});
}
function nabor(client,mess,args) {
  mess.channel.send({embed: {
    color: ("#f5ec42"),
    title: "Набор Открыт",
    description: "[ссылка на тест](https://forms.gle/JaXBG76hZDMvRMtK6)",
    "image": {
    "url": "https://images-ext-1.discordapp.net/external/1JUO2bwcUkIvaF5tMtoq2HIDnXFKt97-15E6aM_43vs/https/i.gifer.com/3uvT.gif?width=360&height=202"
    }
  }})
}
function color(client,mess,args) {
  mess.channel.send({embed: {
    color: ("#f5ec42"),
    title: "Выберете себе цвет на свой вкус:",
    description: "<:5052_googleblueheart:805888492260950127>‎‎‎‏‏‎ : Голубенький\n<:3680_googleredheart:805888492760072243> : Красненький\n<:GreenHeart:805888492420595752> : Зелененький\n<:5052_googleblueeheart:806077333604794399> : Синенький\n<:PurpleHeart:805888492323602483> : Фиолетовенький\n<:3680_googleorangeheart:806077311408799755> : Оранжевенький\n<:YellowHeart:805888492378128385> : Желтый\n<:whiteHeart:806077357805797406> : Беленький\n<:BlackHeart:805888492403949568> : Черненький\n<:pinkHeart:806077378803662858> : Розовенький",
    "image": {
    "url": "https://media.discordapp.net/attachments/750777214525767780/805901050195476581/cd0ac53c65a93a2ccfabb720e1dcb0fe1.gif?width=432&height=223"
    },
    "footer": {
      text: "Поспешу заметить тебе очень идет"
    },
  }})
}
function cry(mess) {
  const gif = crygif[Math.floor(Math.random() * crygif.length)];
  var ment = mess.mentions.users.first();

  let embed = new Discord.MessageEmbed()
  if(comms.content==prefix.comms){
    let embed = new Discord.MessageEmbed()
  .setColor("#343638")
  .setTitle("Реакции: плач")
  .setDescription(`${mess.author} Рaсплакался(-ась)`)
  .setImage(gif)
  mess.channel.send(embed)
  }else if(mess.content == prefix.comms + mentions.users) {
  let embed = new Discord.MessageEmbed()
  .setColor("#343638")
  .setTitle("Реакции: плач")
  .setDescription(`${mess.author} Рaсплакался(-ась) из-за ${ment}`)
  .setImage(gif)
  mess.channel.send(embed)
  }
}
function partntext(client,mess,args) {
  mess.channel.send({embed: {
    color: ("#f5ec42"),
    title: "Наш текст:",
    description: ("```┏━─══─══─━══─⊱:black_small_square:⊰─══━─══─══─━┓\n      ・ Вжух~ приветствую вас, путники!♡・\n             Мы бы хотели предложить вам\n               прекрасный сервер Yumiko.\n      ────────────────────────\n                     ・⊰ Здесь вы найдёте: ⊱・\n      ────────────────────────\n・Уют на нашем сервере ♡\n・Весёлую и адекватную администрацию ♡\n・Собственного бота ♡\n・Роли которые вы сможете выбрать сами ♡\n・Людей с которыми вы сможете поиграть ♡\n       ────────────────────────\n                     ・Тематика общения・\n                            Общение/аниме\n┗━─══─══─━══─⊱:black_small_square:⊰─══━─══─══─━┛\nhttps://cdn.discordapp.com/attachments/794662788811063309/806209164011241493/1477245348_tumblr_nhazzkM6sU1qa94xto1_500.gif https://discord.gg/bGuff9KbGH```"),
    "image": {
      "url": "https://cdn.discordapp.com/attachments/794662788811063309/806209164011241493/1477245348_tumblr_nhazzkM6sU1qa94xto1_500.gif"
    },
  }});
}

// Список команд //

var comms_list = [{
  name: "test",
  out: test,
  about: "Тестовая команда"
},
{
  name: "clear",
  out: clear,
  about: "Чистка чата"
},
{
  name: "gender",
  out: gender,
  about: "команда для вызова рамки с полом"
},
{
  name: "nabor",
  out: nabor,
  about: "команда для вызова рамки с полом"
},
{
  name: "color",
  out: color,
  about: "команда для вызова рамки с полом"
},
{
  name: "cry",
  out: cry,
  about: "Плакать"
},
{
  name: "partntext",
  out: partntext,
  about: "pox",
}
];


// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

module.exports.comms = comms_list;
