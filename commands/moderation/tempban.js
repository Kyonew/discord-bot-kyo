const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const parseDuration = require('parse-duration'),
    humanizeDuration = require('humanize-duration')
    const { MESSAGES } = require("../../util/constants");
    const guild = require('../../models/guild');

module.exports.run = async(client,message,args) => {

    const nepermEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Vous n\'avez pas les permissions pour cette commande.**')

    const pasbanEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Vous ne pouvez pas bannir ce membre.**')

    const botnobanEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Désolé ! Mais je ne peut pas bannir ce membre...**')

    const dureeEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Veuillez entrer une durée valide.**')


    
    const settings = await client.getGuild(message.guild);

    const logChannel = message.guild.channels.cache.get(settings.logChannelID);



    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(nepermEmbed).then(m => m.delete({timeout: 10000}));
    const member = message.mentions.members.first()
    const duration = parseDuration(args[1])
    const reason = args.slice(2).join(' ') || 'Aucune raison spécifiée'
  
    const debanEmbed = new MessageEmbed()
    .setTitle('Utilisateur unban !')
    .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setTimestamp()
    .setDescription(`**Utilisateur :** ${member}\n**Raison :** Ses ${args[1]} de ban sont écoulé(e)s.`)
    
    const tempBanEmbed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('Utilisateur banni temporairement')
    .setColor('#FF0000')
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
    .setDescription(`**Utilisateur tempban :** ${member} (ID: ${member.id})\n**Auteur du bannisemment :** ${message.author} (ID: ${message.author.id})\n**La commande a été effectuée dans :** ${message.channel}\n**Raison :** ${reason}\n**Temps :** ${args[1]}.`)
    .setTimestamp()
    .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))

    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send(pasbanEmbed).then(m => m.delete({timeout: 10000}));
    if (!member.bannable) return message.channel.send(botnobanEmbed).then(m => m.delete({timeout: 10000}));
  
    if (!duration) return message.channel.send(dureeEmbed).then(m => m.delete({timeout: 10000}));
    
    await member.ban({reason})
    message.channel.send(`${member.user.tag} a été banni pendant ${humanizeDuration(duration, {language: 'fr'})} !`).then(m => m.delete({timeout: 7000}));
   
    if(settings.logs === 'disable') return;
   
    logChannel.send(tempBanEmbed)
    setTimeout(() => {
        message.guild.members.unban(member)
        logChannel.send(debanEmbed)
    }, duration)
},


module.exports.help = MESSAGES.COMMANDS.MODERATION.TEMPBAN;