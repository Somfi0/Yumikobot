module.exports = client => {
 const channelId = '810941652004503563'
    
client.on('guildMemberAdd', (member) => {
    console.log(member)

      const welcomemsg = new Discord.MessageEmbed()
      welcomemsg.setColor('#0099ff')
	welcomemsg.setTitle('Some title')
	welcomemsg.setDescription('Some description here')
    
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(welcomemsg)
})
}
