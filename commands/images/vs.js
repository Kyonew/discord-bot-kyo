const Discord = require("discord.js");
const ameClient = require("amethyste-api");
const ameApi = new ameClient(process.env.APITOKEN);
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {

    
    const user = message.author

   const user2 = message.mentions.users.first()

   if(!user2) return message.channel.send('Mentionne l\'utilisateur avec qui tu veux faire un versus 🥊')
message.channel.send('Veuillez patienter...').then(m => m.delete({timeout: 7000}));
const buffer = await ameApi.generate("vs", { avatar: user.displayAvatarURL({ format: "png", size: 512 }), url: user2.displayAvatarURL({ format: "png", size: 512 }), type: 2 });
const attachment = new Discord.MessageAttachment(buffer, "vs.png");

message.channel.send(attachment);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.VS;