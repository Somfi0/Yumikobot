module.exports = client => {
    const channelId = '810941652004503563'
    
client.on('guildMemberAdd', (member) => {
    console.log.(member)
  
  const channel = member.guild.channels.cache.get(channelId)
  mess.guild.channels.get(channelId).send({embed: {
      color: ("#f5ec42"),
    title: "Приветствую на 𝘠𝘶𝘮𝘪𝘬𝘰",
    description: ("вв"),
    "image": {
      "url": "https://media.discordapp.net/attachments/751078000430284912/805450212298326016/image_860911170005395524955.gif"
  }
})
}
