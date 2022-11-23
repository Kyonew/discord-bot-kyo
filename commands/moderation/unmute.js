const Discord = require('discord.js')
const { MESSAGES } = require("../../util/constants");
const guild = require('../../models/guild');

module.exports.run = async(client,message,args) => {

    const settings = await client.getGuild(message.guild);

    const logChannel = message.guild.channels.cache.get(settings.logChannelID);
    
    let MuteReason = args.slice(1).join(" ");
    if(!MuteReason) MuteReason = 'Aucune raison spécifiée'

   let user = message.guild.member(message.mentions.users.first());
let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

if (!user.roles.cache.has(muteRole.id)) return message.reply("Cet utilisateur n\'est pas muté !");
user.roles.remove(muteRole.id);
message.channel.send(`<@${user.id}> n'est plus muté.`);


// const unMuteembed = new Discord.MessageEmbed()
// .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
// .setColor("#ffa500")
// .setDescription(`**Action**: unmute`)
// .setTimestamp()
// .setFooter(message.author.username, message.author.avatarURL());

if(settings.logs === 'disable') return;

const deMuteEmbed = new Discord.MessageEmbed()
.setTitle('Utilisateur unmute !')
.setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
.setTimestamp()
.setDescription(`**Utilisateur :** ${user}\n**Raison :** ${MuteReason}\n**Unmute par :** ${message.author}`)

return logChannel.send(deMuteEmbed);

};


module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;
