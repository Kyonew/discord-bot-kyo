const {MessageEmbed} = require('discord.js')
const { MESSAGES } = require("../../util/constants");
const guild = require('../../models/guild');

const Discord = require('discord.js');

 module.exports.run = async(client, message, args) => {
    const name = message.channel.name;
    let reason = args.join(" ") || "Aucun raison spécifiée."
    if(!message.channel.deletable) {
        return message.reply("Ce salon ne peut pas être nuke !")
    }

    let embed = new MessageEmbed()
    .setTitle("Salon nuke !")
    .setDescription(reason)
    .setColor('#FF8C00')
    .setImage('https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif')
    .setTimestamp()
    .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))

    const position = message.channel.position;
    const rateLimitPerUser = message.channel.rateLimitPerUser;
    var newChannel = await message.channel.clone()
    message.channel.delete();
    newChannel.setPosition(message.channel.position);
    newChannel.setRateLimitPerUser(rateLimitPerUser)
    newChannel.send(embed).then(msg => {
        msg.delete({ timeout: 15000})});


    const settings = await client.getGuild(message.guild);

const logChannel = message.guild.channels.cache.get(settings.logChannelID);    

if(settings.logs === 'disable') return;

const nukembed = new Discord.MessageEmbed()
.setTitle('Nuke effectué !')
.setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
.setTimestamp()
.setColor('#FF8C00')
.setDescription(`**Salon :** ${name}\n**Nuke par :** ${message.author}`)

return logChannel.send(nukembed);
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.NUKE;