const Discord = require('discord.js');

module.exports = async (client, guild) => {
  
    const channelId = '837050288921640980';
    const channel = client.channels.cache.get(channelId); //This Gets That Channel
    const sowner = guild.owner.user; //This Gets The Guild Owner
    if(!channel) return;  //If the channel is invalid it returns
    const embed = new Discord.MessageEmbed()
        .setTitle(`Kyo vient d\'être retiré de ${guild.name}`)
          .setThumbnail(guild.iconURL())
          .addField(`👑 Propriétaire:`, `${sowner.tag}`)
          .addField(`📇 Nom du serveur :`, `${guild.name}`)
          .addField(` Id du serveur:`, `${guild.id}`)
          .addField(` Nombre de membres:`, `${guild.memberCount}`)
          .setColor(`fc3d12`)
          .setFooter( `Désormais : ${client.guilds.cache.size} serveurs`, client.user.displayAvatarURL())
    channel.send(embed);
};