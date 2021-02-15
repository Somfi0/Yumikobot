module.exports = (client) => {
  const channelId = '810941652004503563'
  client.on('guildMemberAdd', member => {
    
    const messwelc = `Please welcome <@${member.id}> to the Yumiko`
    
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(messwelc)
  })
}
