const { MESSAGES } = require("../../util/constants");
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

var connectedCount = 0;
        var streamingCount = 0;
        var mutedCount = 0;
        var mutedMic = 0;
        var CamCount = 0;
        const channels = message.guild.channels.cache.filter(c => c.type === 'voice');
        channels.forEach(c => {
            connectedCount += c.members.size;
            c.members.forEach(m => {
                if(m.voice.streaming) streamingCount++;
                if(m.voice.selfDeaf || m.voice.serverDeaf) mutedCount++;            
                if(m.voice.selfMute || m.voice.serverMute) mutedMic++;    
                if(m.voice.selfVideo || m.voice.serverVideo) CamCount++;                
            })
        })
        const voiceConnectedEmbed = new Discord.MessageEmbed()            
            .addField('Statistiques vocal',`<:voc:835976026361167912> **${connectedCount}** membres sont en vocal.\n<:stream:835976240547758100> **${streamingCount}** membres sont en stream.\n<:cam:835976574934450226> **${CamCount}** membres ont leur caméra activé.\n<:mutee:835976252472950834> **${mutedMic}** membres sont mute.\n<:sourdine:835976589187088435> **${mutedCount}** membres sont en sourdine.`)
            .setColor("2f3136")
        message.channel.send(voiceConnectedEmbed);
    }
module.exports.help = MESSAGES.COMMANDS.INFO.VOCAL;