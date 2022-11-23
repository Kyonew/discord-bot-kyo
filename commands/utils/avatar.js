const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
    let embed = new Discord.MessageEmbed()
        .setColor(`#4cd8b2`)
        .setDescription(`**${user.username}'s** avatar :`)
        .setImage(avatar)
        .setFooter('Avatar')
        .setTimestamp();
    message.channel.send(embed);

};
  
  module.exports.help = MESSAGES.COMMANDS.UTILS.AVATAR;