module.exports = client => {
    const channelId = ''
    
client.on('guildMemberAdd', (member) => {
    console.log(member)
  
    const welcomemess = `Приветствую тебя <@${member.id}> на нашем сервере Yumiko`
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(welcomemess)
})
}
