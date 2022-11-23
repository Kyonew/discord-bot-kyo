const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.channel.send(args.join(" "));
    message.delete();
}

  module.exports.help = MESSAGES.COMMANDS.FUN.SAY;