module.exports = client => {
    const channelId = '810941652004503563'
    
client.on('guildMemberAdd', (member) => {
    console.log.(member)
  
    const welcomemess = new Discord.MessageEmbed()
        welcomemess.setColor('#5cf000')
    welcomemess.setTitle('**' + member.user.username + '** is now Among Us other **' + member.guild.memberCount + '** people')
    welcomemess.setImage('https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ-650-80.jpg.webp')

    member.guild.channels.cache.find(i => i.name === 'greetings').send(welcomemess)
})
}
