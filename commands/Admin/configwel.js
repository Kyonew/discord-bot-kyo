const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args, settings) => {

  const oneminuteembed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('⏲ **Les 60 secondes sont écoulées !**')
  const nochangechannel = new Discord.MessageEmbed()
  .setColor('#169f73')
  .setDescription("**Le salon n'a pas été changé !**")
  const nimageti = new Discord.MessageEmbed()
  .setTitle('Veuillez entrer le **lien** de votre image. (Une image de 700 x 250 est recommandée)')
  .setDescription('💡 __Tips__ : Discord permet aussi d\'héberger des images, vous pouvez donc tout simplement envoyer votre image dans un salon et cliquer sur "copier le lien"')
  .setColor('#169f73')
  .setFooter('Pour annuler l\'action, répondez par "cancel"')
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
  const newchannelembed = new Discord.MessageEmbed()
  .setTitle('Veuillez mentionner le nouveau salon de bienvenue.')
  .setColor('#169f73')
  .setDescription('💡 __Tips__ : Vous pouvez annuler l\'action en répondant par "cancel".')

  message.delete()

  var x = setTimeout(() => {
    message.channel.send(oneminuteembed)
    msg.reactions.removeAll()
    }, 60000)

    
  const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot
  let msg = await message.channel.send(new Discord.MessageEmbed().setTitle('**Que souhaitez-vous faire ?**').setDescription(`✅ Activer le système de bienvenue\n❌ Désactiver le système de bienvenue\n🔄 Changer le salon de bienvenue\n🖌 Changer l'image de fond\n\nSalon actuel : <#${settings.welcomeChannelID}> ` || 'Aucun').setColor('#169f73').setFooter('Kyo | Configuration', client.user.displayAvatarURL({dynamic: true, size: 512})).setTimestamp().setImage('https://media.discordapp.net/attachments/724254847049662555/834771779503259648/welcome-imagebot.png'))
  msg.react("✅"); msg.react("❌"); msg.react("🔄"); msg.react("🖌");
  const collectorReaction = await new Discord.ReactionCollector(msg, filterReaction)
  let filter = (msg) => msg.author.id === message.author.id
  collectorReaction.on('collect', async reaction => {
  
    switch(reaction._emoji.name){

  case '✅':
    clearTimeout(x)
      msg.reactions.removeAll();
        
      client.updateGuild(message.guild, { welcome: 'enable' });
      message.channel.send(welcheck);

  break;

  case '❌':
    clearTimeout(x)
      msg.reactions.removeAll();
        
      client.updateGuild(message.guild, { welcome: 'disable' });
      message.channel.send(weldisable);

      break;

      case '🔄':
        clearTimeout(x)
          msg.reactions.removeAll();
      
          message.channel.send(newchannelembed)

               
               const nwelchannels = (await message.channel.awaitMessages(filter, {max: 1})).first().content
                if (nwelchannels === 'cancel') return message.channel.send(nochangechannel)
                if (nwelchannels) {
                await client.updateGuild(message.guild, { welcomeChannelID: nwelchannels.slice(2, -1) });
                message.channel.send(`Salon de bienvenue mis à jour: \`${settings.welcomeChannelID}\`-> \`${nwelchannels}\``);   
                };

                break;

                case '🖌':
                  clearTimeout(x)
                   msg.reactions.removeAll();

                    message.channel.send(nimageti)

                   // let filter = (msg) => msg.author.id === message.author.id
                    const nimagewel = (await message.channel.awaitMessages(filter, {max: 1})).first().content
                    if (nimagewel === 'cancel') return message.channel.send(noimageedit)
                    if (nimagewel) {            
                    await client.updateGuild(message.guild, { welcomeImage: nimagewel }); 
                    message.channel.send(imageedit); 
                }
            }
      })
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIGWEL;