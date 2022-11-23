const fetch = require('node-fetch');
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const discord = require("discord.js")
const { MESSAGES } = require("../../util/constants");

module.exports = {
  run: async (client, message, args) => {
  
let msg = await message.channel.send({
  embed: {
    "description": "Récupération des informations...",
    "color": "BLUE"
  }
})
      let corona = await fetch("https://disease.sh/v3/covid-19/all")
      corona = await corona.json()
      
      let embed = new discord.MessageEmbed()
      .setTitle("Cas global 🦠")
      .setColor("GREEN")
      .setThumbnail('https://cdn.discordapp.com/attachments/736244502720675962/835233761553023007/virus.png')
      .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
      .setTimestamp()
      .setDescription("**Il se peut que les données ne soient pas exactes..**")
      .addField("Cas total", corona.cases, true)
      .addField("Morts totals", corona.deaths, true)
      .addField("Total de soigné(e)s", corona.recovered, true)
      .addField("Nombre de cas aujourd'hui", corona.todayCases, true)
      .addField("Nombre de morts aujourd'hui", corona.todayDeaths, true)
      .addField("Cas actifs", corona.active, true);
      
     msg.edit(embed)

  }
}

module.exports.help = MESSAGES.COMMANDS.INFO.COVID;