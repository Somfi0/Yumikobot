module.exports = client => {
	
     client.on('guildMemberAdd', async newMember =>{
     const channelId = '810941652004503563'
     const welchannel = newMember.guild.channels.cache.get(channelId)
     let welcmsg = new Discord.MessageEmbed()
     welchannel.send(welcmsg)
             let welcmsg = new Discord.MessageEmbed()
             .setColor('#f5ec42')
             .setTitle('Jeb')
     welchannel.send(welcmsg)
     });
}
