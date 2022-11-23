const Discord = require('discord.js')
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args, settings) => {

    message.delete()
    const inviteembed = new Discord.MessageEmbed()
    .setColor('#87CEFA')
    .setTitle('Lien d\'invitation Kyo')
    .setDescription('**Tu souhaites inviter Kyo ?**\n[clique ici](https://discord.com/api/oauth2/authorize?client_id=831162216845279232&permissions=8&scope=bot)')
    .setFooter('Kyo | Invitation', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 512}))

    message.channel.send(inviteembed)
};

module.exports.help = MESSAGES.COMMANDS.UTILS.INVITE;