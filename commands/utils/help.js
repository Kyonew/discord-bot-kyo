const Discord = require('discord.js')
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args, settings) => {
  message.delete()
  if (!args.length) {
    const embed1 = new Discord.MessageEmbed()
    .setTitle('Menu d\'aide - Kyo')
    .setTimestamp()
    .setFooter('Kyo | Help', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setColor('#00BFFF')
    .setDescription(`**Besoin d'aide ?** Tu peux rejoindre mon [support server](https://discord.gg/AhMxQCJafM).\n__Le prefix du bot est__ : \`${settings.prefix}\``)
    .addField('ㅤ\n⚙ ・ Configuration', "`config`, `setprefix`, `configlogs`, `configwel`")
    .addField('🌈 ・ Fun', "`8ball`, `hug`, `kiss`, `poke`, `say`, `slap`, `tickle`")
    .addField('ℹ ・ Informations', "`serverinfo`, `userinfo`, `channelinfo`, `roleinfo`, `botinfo`, `vocal`, `covid`")
    .addField('⚔ ・ Modération', "`ban`, `clear`, `kick`, `mute`, `tempban`, `unban`, `unmute`, `nuke`")
    .addField('🔞 ・ NSFW', "`nsfw4k`, `anal`, `ass`, `boobs`, `boobsbomb`, `nsfwgif`, `hentai`, `hentaibomb`, `pussy`")
    .addField('🎉 ・ Giveaways', "`start`, `end`, `reroll`, `givhelp`")
    .addField('📌 ・ Utiles', "`avatar`, `dm`, `help`, `ping`, `embed`, `meteo`, `invite`")
    .addField('📷 ・ Images', "`crush`, `trigger`, `wanted`, `batslap`, `brazzers`, `fire`, `gay`, `insta`, `missionpassed`, `ps4`, `rip`, `scary`, `wasted`, `vs`")
    .addField('ㅤ', ` 💡 __Tips__ : Tu peux avoir plus de renseignements sur une commande en effectuant \`${settings.prefix}help <command>\``)

    return message.channel.send(embed1);
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply("Cette commande n'existe pas!");

    const embed = new Discord.MessageEmbed()
      .setColor('#00BFFF')
      .setTitle(`\`${command.help.name}\``)
      .addField("Description", `${command.help.description}`)
      .addField('Cooldown', `${command.help.cooldown} seconde(s)`)
      .setFooter('Kyo | Help', client.user.displayAvatarURL({dynamic: true, size: 512}))
      .addField("Utilisation", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`, true)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    return message.channel.send(embed);
  }
};

module.exports.help = MESSAGES.COMMANDS.UTILS.HELP;