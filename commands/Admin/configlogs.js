const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args, settings) => {

  const nochangechannel = new Discord.MessageEmbed()
  .setColor('#169f73')
  .setDescription("**Le salon n'a pas été changé !**")
  const newchannelembed = new Discord.MessageEmbed()
  .setTitle('Veuillez mentionner le nouveau salon des logs.')
  .setColor('#169f73')
  .setDescription('💡 __Tips__ : Vous pouvez annuler l\'action en répondant par "cancel".')
  const logscheck = new Discord.MessageEmbed() 
  .setColor('#008000')
  .setDescription('**✅ Les logs sont désormais activées !**')

  const logsdisable = new Discord.MessageEmbed()      
  .setColor('#FF0000')
  .setDescription('**❌ Les logs sont désormais désactivées !**')
  message.delete()

  const oneminuteembed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('⏲ **Les 60 secondes sont écoulées !**')

  const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot
  let msg = await message.channel.send(new Discord.MessageEmbed().setTitle('**Que souhaitez-vous faire ?**').setDescription(`✅ Activer les logs\n❌ Désactiver les logs\n🔄 Changer le salon des logs\n\nSalon actuel : <#${settings.logChannelID}>` || 'Aucun').setColor('#169f73').setFooter('Kyo | Configuration', client.user.displayAvatarURL({dynamic: true, size: 512})).setTimestamp())
  msg.react("✅"); msg.react("❌"); msg.react("🔄");

  var x = setTimeout(() => {
    message.channel.send(oneminuteembed)
    msg.reactions.removeAll()
    }, 60000)



  const collectorReaction = await new Discord.ReactionCollector(msg, filterReaction)

  collectorReaction.on('collect', async reaction => {
  
      switch(reaction._emoji.name){

  case '✅':
      clearTimeout(x)
      msg.reactions.removeAll();
        
      client.updateGuild(message.guild, { logs: 'enable' });
      message.channel.send(logscheck);

  break;

  case '❌':
    clearTimeout(x)
      msg.reactions.removeAll();
        
      client.updateGuild(message.guild, { logs: 'disable' });
      message.channel.send(logsdisable);

      break;

      case '🔄':
        clearTimeout(x)
          msg.reactions.removeAll();
      
          message.channel.send(newchannelembed)

               let filter = (msg) => msg.author.id === message.author.id
               const channelss = (await message.channel.awaitMessages(filter, {max: 1})).first().content
                if (channelss === 'cancel') return message.channel.send(nochangechannel)
                if (channelss) {
                await client.updateGuild(message.guild, { logChannelID: channelss.slice(2, -1) });
                const logschange = new Discord.MessageEmbed()
                .setDescription(`**Salon de logs mis à jour : \`${settings.logChannelID}\` ➔ \`${channelss}\`**`)
                .setColor('#169f73')
                  return message.channel.send(logschange);
                  
                }
              }
      })
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIGLOGS;