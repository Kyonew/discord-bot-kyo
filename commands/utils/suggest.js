const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {

    const suggestchannel = client.channels.cache.get('836994848296534036')
    // const nechannel = new MessageEmbed()
    // .setColor('#FF0000')
    // .setDescription(`❌ **Vous devez être dans ${suggestchannel} pour cette commande**`)
    let suggestion =  args.join(" ");

      

      if(message.author.bot) return
 //     if(message.channel.id != suggestchannel) return message.channel.send(nechannel)
         else {
        message.delete() && suggestchannel.send(new MessageEmbed() .setFooter(`Kyo | Suggestion`) .setAuthor(`Suggestion de ${message.author.username}`) .setColor('#00BFFF') .setTimestamp() .setThumbnail('https://cdn.discordapp.com/attachments/724254847049662555/838459976854798426/ampoule.png') .setDescription(`**${suggestion}**`)).then(async msg => {
          msg.react("<:check:838462870790209576>") && msg.react("❌")
        })
      }
    };
   
   
   
   
   
      //   else {
    //     message.delete() && suggestchannel.send(new MessageEmbed() .setFooter('Kyo | Suggestion') .setColor('#00BFFF') .setTitle(`Suggestion de ${message.author}`).setDescription(`${message.content}`)
    //     .then(async msg => {
    //     msg.react("✅") && msg.react("❌")
    //     }))
    //   }
  
module.exports.help = MESSAGES.COMMANDS.UTILS.SUGGEST;