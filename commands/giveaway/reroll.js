const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
exports.run = async (client, message, args) => {
    const noembed = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Vous n\'avez pas la permission de reroll le giveaway.')
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(noembed);
    }

    if(!args[0]){
        return message.channel.send('Oh! Je n\'ai pas réussi à trouver ce giveaway...');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send('Mmmh, je n\'arrive pas à trouver un giveaway pour `'+ args.join(' ') +'`.');
    }

    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send('Giveaway reroll !');
    })
    .catch((e) => {
        if(e.startsWith(`Le giveaway avec l'ID de message \`${giveaway.messageID}\` n'est pas fini.`)){
            message.channel.send('Le giveaway n\'est pas fini !');
        } else {
            console.error(e);
            message.channel.send('Oups! Une erreur s\'est produite...');
        }
    });

};

module.exports.help = MESSAGES.COMMANDS.GIVEAWAY.REROLL;