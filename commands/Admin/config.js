const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args, settings) => {
    let filter = (msg) => msg.author.id === message.author.id
  message.delete()
  let statutlogs = '❌'
    if(settings.logs === 'enable') {
        statutlogs = '✅'
    }
  let welstatut = '❌'
  if(settings.welcome === 'enable') {
      welstatut = '✅'
  }
   const oneminuteembed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('⏲ **Les 60 secondes sont écoulées !**')
  const nochangechannel = new Discord.MessageEmbed()
  .setColor('#169f73')
  .setDescription("**Le salon n'a pas été changé !**")

  const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot
  let msg = await message.channel.send(new Discord.MessageEmbed()
  .setTitle('**Menu de configuration - Kyo**')
  .setDescription(`📁 Configuration des logs\n🖼 Configuration du système de bienvenue.\n❗ Changer le prefix`)
  .setColor('#169f73')
  .addField('Configuration actuelle :', `${statutlogs} Logs : <#${settings.logChannelID}>\n${welstatut} Welcome : <#${settings.welcomeChannelID}>\nPrefix : \`${settings.prefix}\``)
  .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 512}))
  .setFooter('Kyo | Configuration', client.user.displayAvatarURL({dynamic: true, size: 512}))
  .setTimestamp())
  msg.react("📁"); msg.react("🖼"); msg.react("❗");
  const collectorReaction = await new Discord.ReactionCollector(msg, filterReaction)
  
  var x = setTimeout(() => {
    message.channel.send(oneminuteembed)
    msg.reactions.removeAll()
    }, 60000)
  collectorReaction.on('collect', async reaction => {
  
      switch(reaction._emoji.name){

  case '📁':
  clearTimeout(x)
  msg.delete()    

      const logscheck = new Discord.MessageEmbed() 
      .setColor('#008000')
      .setDescription('**✅ Les logs sont désormais activées !**')

      const logsdisable = new Discord.MessageEmbed()      
      .setColor('#FF0000')
      .setDescription('**❌ Les logs sont désormais désactivées !**')

      const newcloghannelembed = new Discord.MessageEmbed()
      .setTitle('Veuillez mentionner le nouveau salon des logs.')
      .setColor('#169f73')
      .setDescription('💡 __Tips__ : Vous pouvez annuler l\'action en répondant par "cancel".')

      let msgd = await message.channel.send(new Discord.MessageEmbed().setTitle('**Que souhaitez-vous faire ?**').setDescription(`✅ Activer les logs\n❌ Désactiver les logs\n🔄 Changer le salon des logs\n\nSalon actuel : <#${settings.logChannelID}>` || 'Aucun').setColor('#169f73').setFooter('Kyo | Configuration', client.user.displayAvatarURL({dynamic: true, size: 512})).setTimestamp())
      msgd.react("✅"); msgd.react("❌"); msgd.react("🔄");
      const collectorReaction = await new Discord.ReactionCollector(msgd, filterReaction)
      var e = setTimeout(() => {
        message.channel.send(oneminuteembed)
        msg.reactions.removeAll()
        }, 60000)
      collectorReaction.on('collect', async reaction => {
      
          switch(reaction._emoji.name){
    
      case '✅':
        clearTimeout(e)
          msgd.reactions.removeAll();
            
          client.updateGuild(message.guild, { logs: 'enable' });
          message.channel.send(logscheck);
    
      break;
    
      case '❌':
        clearTimeout(e)
          msgd.reactions.removeAll();
            
          client.updateGuild(message.guild, { logs: 'disable' });
          message.channel.send(logsdisable);
    
          break;
    
          case '🔄':
            clearTimeout(e)
              msgd.reactions.removeAll();
          
              message.channel.send(newcloghannelembed)
    
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
  break;

  case '🖼':
    clearTimeout(x)
      msg.delete()
      
      const welcheck = new MessageEmbed()
      .setColor('#008000')
      .setDescription("**✅ Le système de bienvenue est désormais activé !**")

      const weldisable = new MessageEmbed()
      .setColor('#FF0000')
      .setDescription('**❌ Le système de bienvenue est désormais désactivé !**')

      const imageedit = new MessageEmbed()
      .setColor('#008000')
      .setDescription('**✅ L\'image de fond a bien été modifiée !**')

      const noimageedit = new MessageEmbed()
      .setColor('#169f73')
      .setDescription('**L\'image de fond n\'a pas été modifiée !**')

      const nimageti = new Discord.MessageEmbed()
      .setTitle('Veuillez entrer le **lien** de votre image. (Une image de 700 x 250 est recommandée)')
      .setDescription('💡 __Tips__ : Discord permet aussi d\'héberger des images, vous pouvez donc tout simplement envoyer votre image dans un salon et cliquer sur "copier le lien"')
      .setColor('#169f73')
      .setFooter('Pour annuler l\'action, répondez par "cancel"')
    
      const newchannelembed = new Discord.MessageEmbed()
      .setTitle('Veuillez mentionner le nouveau salon de bienvenue.')
      .setColor('#169f73')
      .setDescription('💡 __Tips__ : Vous pouvez annuler l\'action en répondant par "cancel".')

      let msge = await message.channel.send(new Discord.MessageEmbed().setTitle('**Que souhaitez-vous faire ?**').setDescription(`✅ Activer le système de bienvenue\n❌ Désactiver le système de bienvenue\n🔄 Changer le salon de bienvenue\n🖌 Changer l'image de fond\n\nSalon actuel : <#${settings.welcomeChannelID}> ` || 'Aucun').setColor('#169f73').setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512})).setTimestamp().setImage('https://media.discordapp.net/attachments/724254847049662555/834771779503259648/welcome-imagebot.png'))
      msge.react("✅"); msge.react("❌"); msge.react("🔄"); msge.react('🖌')
      const collectorReactionn = await new Discord.ReactionCollector(msge, filterReaction)
      var f = setTimeout(() => {
        message.channel.send(oneminuteembed)
        msg.reactions.removeAll()
        }, 60000)
      collectorReactionn.on('collect', async reaction => {
      
          switch(reaction._emoji.name){
    
      case '✅':
        clearTimeout(f)
          msge.reactions.removeAll();
            
          client.updateGuild(message.guild, { welcome: 'enable' });
          message.channel.send(welcheck);
    
      break;
    
      case '❌':
        clearTimeout(f)
          msge.reactions.removeAll();
            
          client.updateGuild(message.guild, { welcome: 'disable' });
          message.channel.send(weldisable);
    
          break;

          case '🖌':
            clearTimeout(f)
            msge.reactions.removeAll();

            message.channel.send(nimageti)

            let filtere = (msg) => msg.author.id === message.author.id
             const nimagewel = (await message.channel.awaitMessages(filtere, {max: 1})).first().content
             if (nimagewel === 'cancel') return message.channel.send(noimageedit)
             if (nimagewel) {            
             await client.updateGuild(message.guild, { welcomeImage: nimagewel }); 
             message.channel.send(imageedit); 
             };

        break;
    
          case '🔄':
            clearTimeout(f)
              msge.reactions.removeAll();
          
              message.channel.send(newchannelembed)
    
                   let filter = (msg) => msg.author.id === message.author.id
                   const channelsse = (await message.channel.awaitMessages(filter, {max: 1})).first().content
                    if (channelsse === 'cancel') return message.channel.send(nochangechannel)
                    if (channelsse) {
                    await client.updateGuild(message.guild, { welcomeChannelID: channelss.slice(2, -1) });
                      
                    const welchannelembed = new MessageEmbed()
                    .setColor('#169f73')
                    .setDescription(`**Salon de bienvenue mis à jour : \`${settings.welcomeChannelID}\` ➔ \`${channelsse}\`**`)
                      return message.channel.send(welchannelembed);
                      
                    }
                  }
          })
      break;


      case '❗':
        clearTimeout(x)
          msg.delete()

          let filterr = (msg) => msg.author.id === message.author.id
          const noprefixx = new Discord.MessageEmbed()
          .setColor('#169f73')
          .setDescription("**Le prefix n'a pas été changé !**")
              
          const newprefixembed = new Discord.MessageEmbed()
          .setTitle('**Veuillez entrer le nouveau prefix**')
          .setDescription('💡 __Tips__ : Evitez de mettre une mention en tant que prefix, c\'est pas cool')
          .setColor('#169f73')
          .setFooter('Vous pouvez annuler l\'action en répondant par "cancel"')
          
          message.channel.send(newprefixembed)
          var g = setTimeout(() => {
            message.channel.send(oneminuteembed)
            msg.reactions.removeAll()
            }, 60000)
          const newSetting = (await message.channel.awaitMessages(filterr, {max: 1})).first().content
          if(newSetting === 'cancel') return message.channel.send(noprefixx)

          if (newSetting) {
            clearTimeout(g)
            await client.updateGuild(message.guild, { prefix: newSetting });
            const neworefixembed = new Discord.MessageEmbed()
            .setDescription(`**Prefix mis à jour : \`${settings.prefix}\` ➔ \`${newSetting}\`**`)
            .setColor('#169f73')
            return message.channel.send(neworefixembed);
          }
          message.channel.send(`Prefix actuel: \`${settings.prefix}\``);
                  
                
              }
      })
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;