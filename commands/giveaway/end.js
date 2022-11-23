const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
exports.run = async (client, message, args) => {
    const noembed = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Vous n\'avez pas la permission d\'arrêter le giveaway.')
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(noembed);
    }

    if(!args[0]){
        return message.channel.send('Impossible de trouver le giveaway ! Essayez avec l\'ID du message !');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send('Mmmh, je n\'arrive pas à trouver un giveaway pour `'+ args.join(' ') + '`.');
    }
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.channel.send('Le giveaway se terminera dans moins de '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' secondes...');
    })
    .catch((e) => {
        if(e.startsWith(`Le giveaway avec l'ID de message \`${giveaway.messageID}\` est déjà terminé.`)){
          
            message.channel.send('Ce giveaway est déjà terminé !');

        } else {
            console.error(e);
            message.channel.send('Oups! Une erreur est survenue...');
        }
    });

};

module.exports.help = MESSAGES.COMMANDS.GIVEAWAY.END;