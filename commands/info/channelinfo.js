const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js")
const moment = require("moment");

module.exports.run = async (client, message, args) => {
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) || message.channel
    let nsfwww = '❌'
    if (channel.nsfw === true) {
        nsfwww = '✅'
    }
        
    var channel_info = new Discord.MessageEmbed()
        .setTitle("`Channelinfo`")
        .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('#f3f3f3')
        .setTimestamp()
        .setDescription(`Informations concernant : ${channel}`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .addFields(
            { name: 'Nom du salon', value: `${channel.name}`, inline: true },
            { name: 'ID du salon', value: `${channel.id}`, inline: true },
            { name: 'NSFW', value: `${nsfwww}`, inline: true},
            { name: 'Date de création', value: new Date(channel.createdTimestamp).toLocaleDateString(), inline: true},
            { name: 'Description', value: `${channel.topic || "Pas de description"}`, inline: true },
            { name: 'Position', value: channel.position += 1, inline: true },
        )
    
    message.channel.send(channel_info)
        
};
 
module.exports.help = MESSAGES.COMMANDS.INFO.CHANNELINFO;