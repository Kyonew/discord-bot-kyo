const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (client, message, guild) => {

let region;
switch (message.guild.region) {
    case "europe":
        region = '🇪🇺 Europe';
        break;
    case "us-east":
        region = '🇺🇸 us-east'
        break;
    case "us-west":
        region = '🇺🇸 us-west';
        break;
    case "us-south":
        region = '🇺🇸 us-south'
        break;
    case "us-central":
        region = '🇺🇸 us-central'
        break;
}

const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({dynamic : true}))
    .setColor('#f3f3f3')
    .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setTimestamp()
    .setDescription(`Voici les informations concernant **${message.guild.name}**`)
    .setTitle(`${message.guild.name} stats`)
    .addFields(
        {
            name: "<:owner:835115552094683187> Owner",
            value: message.guild.owner.user,
            inline: true
        },
        {
            name: "👥 Membres",
            value: `Il y a ${message.guild.memberCount} membres !`,
            inline: true
        },
        {
            name: "<:online:835115539659620352> Membres en ligne",
            value: `Il y a ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size += message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size } membres en ligne.`,
            inline: true
        },
        {
            name: "🤖 Nombre de bots",
            value: `Il y a ${message.guild.members.cache.filter(m => m.user.bot).size} bot(s).`,
            inline: true
        },
        {
            name: "⏲ Date de création",
            value: `${moment(message.guild.createdAt).format('DD/MM/YYYY')}`,
            inline: true
        },
        {
            name: ":8ball: Nombre de rôles",
            value: `Il y a ${message.guild.roles.cache.size} rôles dans le serveur.`,
            inline: true,
        },
        {
            name: `🗺 Région:`,
            value: region,
            inline: true
        },
        {
            name: ":rocket: Emoji",
            value: message.guild.emojis.cache.size >= 1 ? `Il y a ${message.guild.emojis.cache.size} emojis !` : 'Il n\'y a aucun émojis sur le serveur..' ,
            inline: true
        },
        {
            name: '<:booster:835115603982286888> Boosts',
            value: message.guild.premiumSubscriptionCount >= 1 ? `Le serveur a ${message.guild.premiumSubscriptionCount} boosts !` : `Le serveur n'est pas boosté..`,
            inline: true
        },
    )
await message.channel.send(embed)

};
  
  module.exports.help = MESSAGES.COMMANDS.INFO.SERVERINFO;