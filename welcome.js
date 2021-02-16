module.exports = client => {
// This is the needed event to use the welcome!
client.on('guildMemberAdd', async newMember => {
    // IMPORTANT NOTE: Make Sure To Use async and rename bot to client or whatever name you have for your bot events!
    const welcomeChannel = newMember.guild.channels.cache.find(channel => channel.name === 'welcome-test')
    welcomeChannel.send(msgEmbed)


    // Optional Part (you can modify those extra things if you'd like!) :D
    let msgEmbed = new Discord.MessageEmbed()
    .setTitle (`This is a title for a test`)
    // welcomeChannel.send(msgEmbed) | (that's commented so you know to use it only if you want an embed and also don't delete the other "welcomeChannel.send" just change it in there and say "welcomeChannel.send(msgEmbed)" and define the msgEmbed variable as a let and define it above the "welcomeChannel.send" so the bot will check and see that it's defined so errors won't happen!
    
    const newbieRole = newMember.roles.cache.find(role => role.name === 'Yumiko') // that was to define the role to give newbies (you can name the variable however you want that doesn't matter!)
    newMember.roles.add(newbieRole.id) // this will add the role to that member!
    // All the things that are under the "Optional Part" are 100 % Optional! No Requirement to use those, just use it if you want and they won't affect the welcome message at all!
})
        
}
