module.exports = client => {
 const channelId = '810941652004503563'
client.on('guildMemberAdd', member => {
    

    const welcomeEmbed = new Discord.MessageEmbed()

    welcomeEmbed.setColor("#f5ec42")
    welcomeEmbed.setTitle(`Приветствую тебя <@${member.id}> на нашем сервере Yumiko`)
    welcomeEmbed.setImage("https://media.discordapp.net/attachments/751078000430284912/805450212298326016/image_860911170005395524955.gif")

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(welcomeEmbed)
})
}
