const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    
    const msg = await message.channel.send(`Pinging ...`)

    msg.edit(`🏓 Pong ! \`${Math.floor(msg.createdAt - message.createdAt)}\` ms`)

};
  
  module.exports.help = MESSAGES.COMMANDS.UTILS.PING;