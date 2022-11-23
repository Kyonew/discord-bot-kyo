const { Client, Collection, MessageEmbed } = require('discord.js');
const { loadCommands, loadEvents } = require('./util/loader')
require('dotenv').config()

const client = new Client();
require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
client.mongoose.init();

const { GiveawaysManager } = require('discord-giveaways');
const message = require('./events/client/message');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "##00BFFF",
        reaction: "🎉"
    }
});

client.on('message', async (message) => {
    const settings = await client.getGuild(message.guild);
    const helpembed = new MessageEmbed()
    .setTitle('Hey ! Moi c\'est Kyo ! On m\'a appelé ?')
    .setDescription(`Ici, mon prefix est : \`${settings.prefix}\`\nSi tu as besoin d'aide tu n'as qu'à faire \`${settings.prefix}help\` !`)
    .setColor('#f3f3f3')
    .setFooter('Kyo | Help', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 512}))
    if(message.content.startsWith(`<@!${client.user.id}`) || message.content.startsWith(`<@${client.user.id}`)) {message.channel.send(helpembed)}

})

//Vérification
client.on('ready', async () => {
        let myGuild = client.guilds.cache.get('831163093115076649');
    let DeleteChannel = myGuild.channels.cache.get('836991699094863932')
    DeleteChannel.bulkDelete(100)
    const embed = new MessageEmbed()
    .setTitle('Vérification')
    .setColor('GREEN')
    .setDescription('**Salut à toi !**\n\nPour accéder au serveur, je te laisse appuyer sur le \`✅\` !\n\nC\'est simplement une petite vérification, pour éviter que des personnes frauduleuses viennent casser le serveur.')
    .setFooter('Kyo | Verification', client.user.displayAvatarURL({dynamic: true, size: 512}))
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 512}))
    let guild = client.guilds.cache.get('831163093115076649');
let SendChannel = guild.channels.cache.get('836991699094863932')
  SendChannel.send(embed)
  .then(msg => msg.react('✅'))
})

//Rolemenu
    client.on('message', async (message) => {
        if(message.content.startsWith('!rolemenu')){
           if(message.guild.id != '831163093115076649') return;
            const separembed = new MessageEmbed()
            .setColor('#00BFFF')
            .setImage('https://media.discordapp.net/attachments/724254847049662555/838500482557018172/separation.png?width=1440&height=22')
            
            if (message.author.id !== "309069526455156738") return;
            message.channel.send(separembed)
            const embed = new MessageEmbed()
            .setTitle('Notifications')
            .setColor('#00BFFF')
            .setDescription('__**Cliquez sur la réacation qui vous convient**__\n\n\`🤖\` ➟ <@&838486010311868476>\n\`🌐\` ➟ <@&838486010593542215>\n\nSélectionnez les notifications que vous souhaitez recevoir !')
            .setImage('https://cdn.discordapp.com/attachments/724254847049662555/838500448423378964/what-is-a-push-notification-and-why-it-matters.png')
    
        message.channel.send(embed)
         const msg = await message.channel.send(separembed)
          msg.react('🤖'); msg.react('🌐')

          const roleembed = new MessageEmbed()
            .setTitle('Rôles')
            .setColor('#00BFFF')
            .setDescription('__**Cliquez sur la réaction qui vous convient**__\n\n<:developer:838493044386430986> ➟ <@&838486527780061204>\n<:adobe_cc:838493853786570813> ➟ <@&839507299270000640>\n\nCes rôles vous permettent d\'avoir accès à des salons d\'entraide !')
            .setImage('https://media.discordapp.net/attachments/724254847049662555/839485861687328778/adobexcode.png?width=1366&height=683')

           message.channel.send(roleembed)
           const msg2 = await message.channel.send(separembed)
            msg2.react('<:developer:838493044386430986>'); msg2.react('<:adobe_cc:838493853786570813>')

        }
        })


client.on('messageReactionAdd', async (reaction, user) => {
    if(user.bot) return;
    const {message} = reaction
    let myGuild = bot.guilds.cache.get('831163093115076649');
    let msgf = myGuild.messages.cache.get('840921399664181268')
   // if (message.author.id !== "309069526455156738") return;
    
    message.fetch();
    switch(reaction.emoji.name) {
        case '✅':  
            if(message.channel.id !== '836991699094863932') return;
            reaction.users.remove(user);
            message.guild.member(user.id).roles.add('836954969386254346')
        break;

        if(message.id != msgf) return;
        case '🤖':
            message.guild.member(user.id).roles.add('838486010311868476')
            break;

        case '🌐':
            message.guild.member(user.id).roles.add('838486010593542215')
            break;
    }
    switch(reaction.emoji.id) {
        case '838493044386430986':
            message.guild.member(user.id).roles.add('838486527780061204')
            break;

        case '838493853786570813':
            message.guild.member(user.id).roles.add('839507299270000640')
            break;
        }
})

client.on('messageReactionRemove', async (reaction, user) => {
    if(user.bot) return;
    const {message} = reaction
   // if (message.author.id !== "309069526455156738") return;
    
    message.fetch();
    switch(reaction.emoji.name) {
        case '✅':
            message.guild.member(user.id).roles.remove('836954969386254346')
        break;

        case '🤖':
            message.guild.member(user.id).roles.remove('838486010311868476')
            break;

        case '🌐':
            message.guild.member(user.id).roles.remove('838486010593542215')
            break;
    }
    switch(reaction.emoji.id) {
        case '838493044386430986':
            message.guild.member(user.id).roles.remove('838486527780061204')
            break;

        case '838493853786570813':
            message.guild.member(user.id).roles.remove('839507299270000640')
            break;

    }

})

client.login(process.env.TOKEN);