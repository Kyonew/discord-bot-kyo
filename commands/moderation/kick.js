const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MESSAGES } = require("../../util/constants");
const guild = require('../../models/guild');

module.exports.run = async(client, message, args) => {

    let KickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!KickedUser) {
        return message.channel.send(`L'utilisateur n'a pas été trouvé`)
    }

    const member = KickedUser

    let KickReason = args.join(' ').slice(22);
    if(!KickReason) KickReason = 'Aucune raison spécifiée'

    if(!message.member.hasPermission('KICK_MEMBERS')) {
        return message.channel.send('Vous n\'avez pas la permission.')
    }
    if(KickedUser.hasPermission('KICK_MEMBERS')) {
        return message.channel.send('Vous ne pouvez pas kick cet utilisateur car elle a la permmission \`KICK_MEMBERS\`')
    }
    message.delete();
    
    const settings = await client.getGuild(message.guild);

    const logChannel = message.guild.channels.cache.get(settings.logChannelID);

    if(settings.logs === 'disable') return;

    let KickEmbed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('#FFA500')
    .setTitle('Utilisateur kick')
    .setThumbnail(KickedUser.user.displayAvatarURL({dynamic: true, size: 512}))
    .setDescription(`**Utilisateur kick :** ${KickedUser} (ID: ${KickedUser.id})\n**Auteur du kick :** ${message.author} (ID: ${message.author.id})\n**La commande a été effectuée dans :** ${message.channel}\n**Raison :** ${KickReason}`)
    .setTimestamp()
    .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))

    

   message.guild.member(KickedUser).kick(KickReason)

    return logChannel.send(KickEmbed);
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK; 