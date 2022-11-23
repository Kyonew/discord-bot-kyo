const { MESSAGES } = require("../../util/constants");
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const Discord = require('discord.js');



module.exports.run = async (client, message, args) => {

    const Auser = message.author;
    let HUser = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!HUser) HUser = client.user;

        const GIF = await neko.sfw.slap();
       
        const slapembed = new Discord.MessageEmbed()
        .setColor('#a45fb2')
        .setDescription(`🤚 **${Auser.username}** slaps **${HUser.username}**`)
        .setFooter('Slap')
        .setImage(GIF.url)
        .setTimestamp();
        
 
     message.channel.send(slapembed);
};
  
  module.exports.help = MESSAGES.COMMANDS.FUN.SLAP;