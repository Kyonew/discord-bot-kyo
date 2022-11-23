const Discord = require('discord.js');
const { MESSAGES } = require("../../util/constants");
const Guild = require("../../models/guild");
const guild = require('../../models/guild');

module.exports.run = async (client, message, args) => {

    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Il faut spécifier un ***nombre*** entre 1 et 100 !');

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  message.delete();
  await message.channel.bulkDelete(messages).then((_message) => {
    const mddd = _message.size
    console.log(_message)
  const nbrDeleteMsg = new Discord.MessageEmbed()
  .setColor('237b0a')
  .setDescription(`\`${_message.size}\` **messages supprimés**`)
  message.channel.send(nbrDeleteMsg).then(msg => {
    msg.delete({ timeout: 10000});
  })
})
.catch();

const settings = await client.getGuild(message.guild);

const logChannel = message.guild.channels.cache.get(settings.logChannelID);

if(settings.logs === 'disable') return;

const logClearembed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
.setColor("#287db5")
.setTitle('Clear effectué !')
.setDescription(`**Nombre de messages supprimés :** ${mddd}\n**Salon**: ${message.channel}`)
.setTimestamp()
.setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
   
return logChannel.send(logClearembed);



  
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR;