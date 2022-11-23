const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
 
    if (message.author.id !== "309069526455156738") return;
    const guildID = args.slice(0).join(" ");
    const guild = message.guild.cache.get(guildID)
    
    guild.leave()

    message.channel.send(`J\'ai bien quitté le serveur dont l\'id est : \`${guildID}\``)
  };


  
  module.exports.help = MESSAGES.COMMANDS.ADMIN.EVAL;

