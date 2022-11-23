const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async(client, message, args) => {

    const norole = new MessageEmbed()
    .setColor('#FF0000')
    .setDescription('❌ **Je ne trouve pas ce rôle...**')

        if (!args[0]) return message.channel.send(norole)
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send(norole);

        const status = {
            false: "❌",
            true: "✅"
        }

        let roleembed = new MessageEmbed()
            .setColor("#f3f3f3")
            .setTitle('\`Roleinfo\`')
            .setDescription(`**Voici les informations concernant le rôle** \`${role.name}\``)
            .setThumbnail(message.guild.iconURL())
            .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
            .setTimestamp()
            .addFields(
                { name: 'Nom du rôle', value: role.name, inline: true},
                { name: 'ID', value: `${role.id}`, inline: true},
                { name: 'Couleur', value: role.hexColor, inline: true},
                { name: 'Membres ayant ce rôle', value: role.members.size, inline: true },
                { name: 'Position', value: role.position, inline: true },
                { name: 'Mentionnable', value: status[role.mentionable], inline: true}
            )

        message.channel.send(roleembed);
    }

    module.exports.help = MESSAGES.COMMANDS.INFO.ROLEINFO;