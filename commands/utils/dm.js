const Discord = require('discord.js')
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js')


module.exports.run = async (client, message, args) => {
    
let user =
message.mentions.members.first() ||
message.guild.members.cache.get(args[0]);

const errUserEmbed = new MessageEmbed()
.setDescription("❌ **Veuillez mentionner la personne à qui envoyer le message.**")
.setColor('#FF0000')

if (!user)
return message.channel.send(errUserEmbed);



const noMessEmbed = new MessageEmbed()
.setDescription('❌ **Veuillez entrer le message à envoyer.**')
.setColor('#FF0000')

const impossEmbed = new MessageEmbed()
.setDescription("❌ **L'utilisateur n'a pas pu être dm.**")
.setColor('#FF0000')

const rightEmebed = new MessageEmbed()
.setDescription(`✅ Message envoyé à **${user.user.username}**`)
.setColor('#7CFC00')


if (!args.slice(1).join(" "))
return message.channel.send(noMessEmbed);
user.user
.send(args.slice(1).join(" "))
.catch(() => message.channel.send(impossEmbed))
message.delete()
.then(() => message.channel.send(rightEmebed)).then(msg => {
    msg.delete({ timeout: 7000});;
});
};

  
  module.exports.help = MESSAGES.COMMANDS.UTILS.DM;