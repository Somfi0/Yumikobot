module.exports = client => {
 client.on('guildMemberAdd', member => {
    const channelId = '810941652004503563'

   mess.guild.channels.get('810941652004503563').send({embed: {
    color: ("#f5ec42"),
    title: "Приветствие",
    description: `Приветствую тебя <@${member.id}> на нашем сервере Yumiko`,
    "image": {
    "url": "https://media.discordapp.net/attachments/751078000430284912/805450212298326016/image_860911170005395524955.gif"
    }
  })
});
        
}
