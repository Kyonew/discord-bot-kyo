const Discord = require("discord.js");
const ameClient = require("amethyste-api");
const ameApi = new ameClient(process.env.APITOKEN);
const { MESSAGES } = require("../../util/constants");

module.exports = {
    run: async (client, message, args) => {

message.channel.send('Veuillez patienter...').then(m => m.delete({timeout: 2000}));

const user = message.mentions.users.first() || message.author;
const buffer = await ameApi.generate("gay", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
const attachment = new Discord.MessageAttachment(buffer, "gay.png");


message.channel.send(attachment)

}
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.GAY;