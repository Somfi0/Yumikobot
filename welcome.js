module.exports = (client) => {
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
  })
}

