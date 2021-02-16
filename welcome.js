module.exports = client => {
    
client.on('guildMemberAdd', (member) => {
    console.log(member)
      const channelId = '810941652004503563'
      
    const welcomemess = `Приветствую тебя <@${member.id}> на нашем сервере Yumiko`
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(welcomemess)
})
}
