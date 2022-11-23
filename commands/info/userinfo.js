const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js")
const moment = require("moment");
const { saveCookies } = require("superagent");

module.exports.run = async (client, message, args) => {
 
  const flags = {
    DISCORD_EMPLOYEE: "<:staff:930784089382981632>",
    DISCORD_PARTNER: "<:partner:930784086581198908>",
    BUGHUNTER_LEVEL_1: "<:BugHunter:930784087508152371>",
    BUGHUNTER_LEVEL_2: "<:BugHunter2:835192291299557436>",
    HYPESQUAD_EVENTS: "<:HypeSquad:930784086568632340>",
    HOUSE_BRAVERY: "<:bravery:930783519842639882>",
    HOUSE_BRILLIANCE: "<:brillance:930784082688901151>",
    HOUSE_BALANCE: "<:balance:930784080444915733>",
    EARLY_SUPPORTER: "<:earlysupporter:930784094927851520>",
    VERIFIED_DEVELOPER: "<:developper:930784085171925032>"
};

  const nomemb = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setDescription('❌ **Impossible de trouver cet utilisateur...**')

  let user;
    if (!args[0]) {
      user = message.member;
    } else {
    
      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { return message.channel.send(nomemb) })
    }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const userFlags = member.user.flags.toArray();


    let status;
    switch (user.presence.status) {
      case "online":
        status = "<:online:930555905471287317> En ligne"
        break;
      case "dnd":
        status = "<:dnd:930555904993144832> Ne pas déranger"
        break;
       case "idle":
         status = "<:idle:930555906280787999> Inactif"
         break;
      case "offline":
        status = "<:offline:930555892003385354> Hors ligne" 
        break;
    }

    let UserEmbed = new Discord.MessageEmbed()
    .setColor('#f3f3f3')
    .setTitle(`\`Userinfo\``)
    .setDescription(`**Voici les informations sur ${user}**`)
    .setThumbnail(user.user.displayAvatarURL({dynamic: true, size: 512}))
    .addFields(
      { name: 'Pseudo', value: `${user.user.username}`, inline: true },
      { name: 'Tag', value: `#${user.user.discriminator}`, inline: true },
      { name: 'ID', value: `${user.user.id}`, inline: true },
      { name: 'Compte crée le', value: moment(user.createdAt).format('DD/MM/YYYY'), inline: true },
      { name: 'A rejoint le', value: new Date(user.joinedTimestamp).toLocaleDateString(), inline: true },
      { name: 'Avatar', value: `[Cliquez ici](${user.user.displayAvatarURL()})`, inline: true },
      { name: 'Rôles', value: user.roles.cache.map(role => role.toString()), inline: true },
     // { name: 'Badge', value: newbadges.join(", ").toLowerCase() || "Aucun", inline: true },
      { name: 'Badge(s)', value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Aucun badge'}`, inline:true },
      { name: 'Statut', value: status, inline: true },
      )  
    .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setTimestamp()

    message.channel.send(UserEmbed)

}
  
  module.exports.help = MESSAGES.COMMANDS.INFO.USERINFO;