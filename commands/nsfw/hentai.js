const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
    
    var superagent = require('superagent');

    if (!message.channel.nsfw){
        const nsfw_channel = new Discord.MessageEmbed()
        .setDescription('❌ Vous devez être dans un salon NSFW pour profiter de cette commande.')
        .setColor('#FF0000')

    message.channel.send(nsfw_channel);
    return;
    } 
      
        superagent.get('https://nekobot.xyz/api/image').query({ type: 'hentai' }).end((err, response) => {
            const embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`**[L'image ne répond pas ? Clique ici](${response.body.message})**`)
                .setTimestamp()
                .setColor('#FF1493')
                .setImage(response.body.message)

            message.channel.send(embed_nsfw);

    })
};
  
  module.exports.help = MESSAGES.COMMANDS.NSFW.HENTAI;