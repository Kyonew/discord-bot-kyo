const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
const { MESSAGES } = require("../../util/constants");
const guild = require('../../models/guild');

module.exports.run = async(client, message, args) => {

    let BannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!BannedUser) {
        return message.channel.send(`L'utilisateur n'a pas été trouvé`)
    }

    let BanReason = args.join(' ').slice(22);
    if(!BanReason) BanReason = 'Aucune raison spécifiée'

    if(!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send('Vous n\'avez pas la permission.')
    }
    if(BannedUser.hasPermission('BAN_MEMBERS')) {
        return message.channel.send('Vous ne pouvez pas ban cet utilisateur car elle a la permmission \`BAN_MEMBERS\`')
    }
    message.delete();
    
    const settings = await client.getGuild(message.guild);

    const logChannel = message.guild.channels.cache.get(settings.logChannelID);

    if(settings.logs === 'disable') return;

    let BanEmbed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('Utilisateur banni')
    .setColor('#FF0000')
    .setThumbnail(BannedUser.user.displayAvatarURL({dynamic: true, size: 512}))
    .setDescription(`**Utilisateur banni :** ${BannedUser} (ID: ${BannedUser.id})\n**Auteur du bannisemment :** ${message.author} (ID: ${message.author.id})\n**La commande a été effectuée dans :** ${message.channel}\n**Raison :** ${BanReason}`)
    .setTimestamp()
    .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))

    

    message.guild.member(BannedUser).ban({reason: BanReason})
    return logChannel.send(BanEmbed);
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN; 