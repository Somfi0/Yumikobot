module.exports = client =>{
client.on('guildMemberAdd', mess => { // Commands Go Inside The client.on('message', 
mess => )
mess.guild.channels.get('810941652004503563').send({embed: {
color: 3447003,
author: {
  name: client.user.username,
  icon_url: client.user.avatarURL
},
title: "Welcome To ()!",
url: "https://districtservices.net",
description: "@MEMBER",
fields: [{
    name: "Fields",
    value: "They can have different fields with small headlines."
  },
  {
    name: "Masked links",
    value: "You can put [masked links](http://google.com) inside of rich embeds."
  },
  {
    name: "Markdown",
    value: "You can put all the *usual* **__Markdown__** inside of them."
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© Example"
}
}}); });
}
