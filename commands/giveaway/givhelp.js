const Discord = require('discord.js')
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args, settings) => {

    const givhelpembed = new Discord.MessageEmbed()
    .setTitle('Besoin d\'aide pour faire un giveaway ?')
    .setTimestamp()
    .setColor('#00BFFF')
    .setFooter('Kyo | Help', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setThumbnail('https://cdn.discordapp.com/attachments/736244502720675962/836600438509928488/giveawaygif.gif')
    .addField('__Pour lancer un giveaway__', `Utilise \`${settings.prefix}start\` <channel> <time> <number_of_winners> <reward>`)
    .addField('__Pour reroll (refaire le tirage) un giveaway__', `Utilise \`${settings.prefix}reroll\` <reward_name> **or** <ID_message>`)
    .addField('__Pour terminer un giveaway__', `Utilise \`${settings.prefix}\` <reward_name> **or** <ID_message>`)
    .setDescription('L\'ID du message est l\'id du message du giveaway ! Si vous n\'y avez pas accès, il vous faut activer le **Mode développeur** situé dans vos paramètres :\n\n**💻 Sur ordinateur :** Paramètre Utilisateur > Avancés > Mode développeur\n**📱 Sur téléphone :** Votre pp en bas à droite > Apparence > Mode développeur')

    message.channel.send(givhelpembed)
}
module.exports.help = MESSAGES.COMMANDS.GIVEAWAY.GIVHELP;