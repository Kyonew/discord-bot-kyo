const ms = require("ms");
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { MESSAGES } = require("../../util/constants");
const guild = require('../../models/guild');


module.exports.run = async(client,message,args) => {


  let user = message.guild.member(message.mentions.users.first());
  if(!user) return message.channel.send('Utilisateur introuvable')
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
  let muteTime = (args[1] || '60s');
  let MuteReason = args.slice(2).join(" ");
    if(!MuteReason) MuteReason = 'Aucune raison spécifiée'

  if (!muteRole) {
    muteRole = await message.guild.roles.create({
      data:{
        name: 'muted',
        color: '#000001',
        permissions: []
      }
    });

    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false
      });
    });
  };

  const settings = await client.getGuild(message.guild);

  const logChannel = message.guild.channels.cache.get(settings.logChannelID);


  const deMuteEmbed = new MessageEmbed()
  .setTitle('Utilisateur unmute !')
  .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
  .setTimestamp()
  .setDescription(`**Utilisateur :** ${user}\n**Raison :** Ses ${ms(ms(muteTime))} de mute sont écoulé(e)s.`)

  await user.roles.add(muteRole.id);
  message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
  }, ms(muteTime))

  setTimeout(() => {
    if (!user.roles.cache.has(muteRole.id)) return;
    else if(settings.logs === 'disable') return; 
    (logChannel.send(deMuteEmbed))
  }, ms(muteTime));
  
if(settings.logs === 'disable') return;
const Muteembed = new MessageEmbed()
.setTitle('Utilisateur muté !')
.setAuthor(message.author.username, message.author.avatarURL())
//.setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
.setColor("#287db5")
.setThumbnail(user.user.displayAvatarURL({dynamic: true, size: 512}))
.setDescription(`**Utilisateur muté :** ${user} (ID: ${user.id})\n**Temps :** ${ms(ms(muteTime))}\n**La commande a été effectuée dans :** ${message.channel}\n**Raison du mute :** ${MuteReason}`)
.setTimestamp()
.setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))

return logChannel.send(Muteembed);

};
  

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;