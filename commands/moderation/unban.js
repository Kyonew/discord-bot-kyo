const {MessageEmbed} = require('discord.js')
const { MESSAGES } = require("../../util/constants");
const guild = require('../../models/guild');

const Discord = require('discord.js');

 module.exports.run = async(client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Vous n\'avez pas la permission d\'effectuer cette commande !')

        let Banmember;

    try {
      Banmember= await client.users.fetch(args[0])
    } catch (e) {
      console.log(e)
    }

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Aucune raison spécifiée';

        message.guild.members.unban(Banmember)
        .catch(err => {
            if(err) return message.channel.send('Quelque chose a mal tourné...')
        })

        const settings = await client.getGuild(message.guild);

        const logChannel = message.guild.channels.cache.get(settings.logChannelID);    

        if(settings.logs === 'disable') return;

        const unbanembed = new Discord.MessageEmbed()
        .setTitle('Utilisateur unban !')
        .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setDescription(`**Utilisateur :** ${Banmember}\n**Raison :** ${reason}\n**Unban par :** ${message.author}`)

        return logChannel.send(unbanembed);
    };


module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;