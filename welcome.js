module.exports = client => {
  client.on('guildMemberAdd', member => {
    
    const messwelc = `Please welcome <@${member.id}> to the Yumiko`
    
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(messwelc)
  })
}
