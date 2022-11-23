const { Collection, DiscordAPIError, MessageEmbed } = require('discord.js');
const { help } = require('../../commands/images/wanted');

module.exports = async (client, message) => {
  
  const settings = await client.getGuild(message.guild);
  if (message.channel.type === "dm") return client.emit("directMessage", message);
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if(!command) return;

  const nopermembed = new MessageEmbed()
  .setColor('#FF0000')
  .setDescription('**❌ Oh! Désolé mais tu n\'as pas la permission d\'effectuer cette commande...**')
  if (command.help.permissions && !message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(nopermembed);

  if (command.help.args && !args.length) {
  let noArgsReplyAdd = ''
  if (command.help.usage) {
    noArgsReplyAdd = `\n\nSi t'as un p'tit soucis, j'te montre comment l'utiliser comme un pro 👇 \n\`${settings.prefix}${command.help.name} ${command.help.usage}\``
  }
  
    let noArgsReply = new MessageEmbed()
  .setColor('#00BFFF')
  .setFooter('Kyo | Help', client.user.displayAvatarURL({dynamic: true, size: 512}))
  .setDescription(`**Hey ${message.author} ! En fait tu peux pas utiliser cette commande sans rien derrière x)** ${noArgsReplyAdd}`)

  
  return message.channel.send(noArgsReply);
};

  const mentionuser = new MessageEmbed()
  .setColor('#FF0000')
  .setDescription('**❌ Il faut mentionner un utilisateur**')
  if (command.help.isUserAdmin && !user) return message.reply(mentionuser);
  
  if (command.help.isUserAdmin && message.guild.member(user).hasPermission('MANAGE_MESSAGES')) return message.reply("Tu ne peux pas utiliser cette commande sur cet utilisateur");
  

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  };

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;
    
    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      const timeleftembed = new MessageEmbed()
      .setColor('ORANGE')
      .setDescription(`**Ne spam pas ! Réessaie dans \`${timeLeft.toFixed()}\` seconde(s)**`)
      return message.reply(timeleftembed);
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args, settings);
}