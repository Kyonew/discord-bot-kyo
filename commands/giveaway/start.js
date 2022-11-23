const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
exports.run = async (client, message, args) => {
    const noembed = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Vous n\'avez pas la permission de lancer un giveaway.')
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(noembed);
    }

    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send('Oh! Je n\'ai pas réussi à trouver ce channel...');
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send('Oh, tu n\'as pas défini le temps du giveaway... Réessaye ?');
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send('Oh, tu n\'as pas défini le nombre de gagnants... Réessaye ?');
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send('Oh, tu ne m\'as pas donné un cadeau valide... Réessaye ?');
    }

    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayNumberWinners,
        hostedBy: client.config.hostedBy ? message.author : null,
        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+":tada: **GIVEAWAY**",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+":tada: **Giveaway terminé !**",
            timeRemaining: "Temps restant : **{duration}**!",
            inviteToParticipate: "Réagis avec 🎉 pour participer !",
            winMessage: "Félicitations {winners}! Tu as gagné **{prize}**!",
            embedFooter: "Giveaways",
            noWinner: "Il n'y a pas assez de participants pour déterminer un gagnant !",
            hostedBy: "Hosted by: {user}",
            winners: "winner(s)",
            endedAt: "Terminé à",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false
            }
        }
    });

    message.channel.send(`:tada: Tout est bon ! Le giveaway pour gagner \`${giveawayPrize}\` a bien débuté dans ${giveawayChannel}!`);

};

module.exports.help = MESSAGES.COMMANDS.GIVEAWAY.START;