const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {

    message.delete()
    let question = args.join(' ')

    const noquestEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Je ne peux pas répondre à votre question s\'il n\'y en a pas !**')

    if (!question)
      return message.channel.send(noquestEmbed);
    else {
      let responses = [
        "Essaye plus tard",
        "Essaye encore",
        "Pas d'avis",
        "C'est ton destin",
        "Le sort en est jeté",
        "Une chance sur deux",
        "Repose ta question",
        "D'après moi oui",
        "C'est certain",
        "Oui absolument",
        "Tu peux compter dessus",
        "Sans aucun doute",
        "Très probable",
        "Oui",
        "C'est bien parti",
        "C'est non",
        "Peu probable",
        "Faut pas rêver",
        "N'y compte pas",
        "Impossible"
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setDescription(`❓ **Question :**\n${question}\n🎱 **Réponse :**\n${response}`)
 //       .setDescription(`Your question: ${question}\nMy reply: ${response}`)
        .setColor(`#73cebe`);
      message.channel.send(Embed);
    }
  };

  
  module.exports.help = MESSAGES.COMMANDS.FUN.OBALL;