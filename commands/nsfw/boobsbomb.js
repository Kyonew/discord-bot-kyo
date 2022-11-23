const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if (!message.channel.nsfw){
        const nsfw_channel = new Discord.MessageEmbed()
        .setDescription('❌ Vous devez être dans un salon NSFW pour profiter de cette commande.')
        .setColor('#FF0000')

    message.channel.send(nsfw_channel);
    return;
    } 
      
    var superagent = require('superagent');


        superagent.get('https://nekobot.xyz/api/image').query({ type: 'boobs' }).end((err, response) => {


        var links = (response.body.message)
        
            message.channel.send(links);
   
            superagent.get('https://nekobot.xyz/api/image').query({ type: 'boobs' }).end((err, response) => {


                var links2 = (response.body.message)
                
                    message.channel.send(links2)
           
                    superagent.get('https://nekobot.xyz/api/image').query({ type: 'boobs' }).end((err, response) => {


                        var links3 = (response.body.message)
                        
                            message.channel.send(links3)

                            superagent.get('https://nekobot.xyz/api/image').query({ type: 'boobs' }).end((err, response) => {


                                var links4 = (response.body.message)
                                
                                    message.channel.send(links4)

                                    superagent.get('https://nekobot.xyz/api/image').query({ type: 'boobs' }).end((err, response) => {


                                        var links5 = (response.body.message)
                                        
                                            message.channel.send(links5)
        })
    })
})
            })
        })
    }

      
      module.exports.help = MESSAGES.COMMANDS.NSFW.BOOBSBOMB;