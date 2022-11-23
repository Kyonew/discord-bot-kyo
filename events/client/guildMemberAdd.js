const guild = require('../../models/guild');
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const Discord = require('discord.js')

module.exports = async (client, member) => {

const settings = await client.getGuild(member.guild);    
const WelcomeChannel = member.guild.channels.cache.get(settings.welcomeChannelID);

if(settings.welcome === 'disable') return;

if (!WelcomeChannel) 
return message.channel.send('Vous n\'avez pas défini de salon de bienvenue.');

const welcomeImage = settings.welcomeImage

let data = await canva.welcome(member, { link: welcomeImage })

const attachment = new Discord.MessageAttachment(data, "welcome-image.png")
WelcomeChannel.send(attachment)
};