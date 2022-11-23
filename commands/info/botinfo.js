const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const os = require('os')
const fs = require("fs");

module.exports.run =  async (client, message, args, settings) => {

message.delete()
const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot
let msg = await message.channel.send(new MessageEmbed()
.setThumbnail(client.user.displayAvatarURL())
.setDescription(`Mon prefix ici est \`${settings.prefix}\`\n© Remerciments`)
.setTitle('Hey ! Moi c\'est Kyo !')
.setColor('#f3f3f3')
.addFields(
    {
        name: '🌐 Serveurs',
        value: `${client.guilds.cache.size}`,
        inline: true
    },
    {
        name: '📺 Channels',
        value: `${client.channels.cache.size}`,
        inline: true
    },
    {
        name: '👥 Utilisateurs',
        value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
        inline: true
    },
    {
        name: '⏳ Ping',
        value: `${Math.round(client.ws.ping)}ms`,
        inline: true
    },
    {
        name: '📱 A rejoins le',
        value: new Date(client.user.createdTimestamp).toLocaleDateString(),
        inline: true
    },
    {
        name: ('<:owner:835115552094683187> Créé par'),
        value: '<@309069526455156738>',
        inline: true
    }
)
.setTimestamp()
.setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
)

msg.react("©");
const collectorReaction = await new Discord.ReactionCollector(msg, filterReaction)
let filter = (msg) => msg.author.id === message.author.id
collectorReaction.on('collect', async reaction => {

  switch(reaction._emoji.name){

case '©':
    msg.delete()
    const Remercimentsembed = new MessageEmbed()
    .setTitle('Remerciements')
    .setThumbnail(client.user.displayAvatarURL())
    .setColor('#00BFFF')
    .setTimestamp()
    .setFooter('Kyo | Merci 💙', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setDescription('Je tenais à remercier certaines personnes sans qui, Kyo n\'existerait probablement pas... Gros 💙 sur vous!\n\n**Twinut** arrivé en retard mais quand même co-creator.\n\n**Autres :**\nImage de bienvenue : canvas-senpai\nUn grand merci aux helpers de [Development Community](https://discord.gg/pTP7SXhu2e)')

    message.channel.send(Remercimentsembed)
    break;
  }
})
};

module.exports.help = MESSAGES.COMMANDS.INFO.BOTINFO;