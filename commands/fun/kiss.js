const { MESSAGES } = require("../../util/constants");
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {

    const Auser = message.author;
    let HUser = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!HUser) HUser = client.user;

        const GIF = await neko.sfw.kiss();
       
        const kissembed = new Discord.MessageEmbed()
        .setColor('#a45fb2')
        .setDescription(`😘 **${Auser.username}** kisses **${HUser.username}**`)
        .setFooter('Kiss')
        .setImage(GIF.url)
        .setTimestamp();
        
 
     message.channel.send(kissembed);
};
  
  module.exports.help = MESSAGES.COMMANDS.FUN.KISS;