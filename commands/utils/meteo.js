const Discord = require("discord.js");
const weather = require("weather-js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
      message.delete()
    let city = args.join(" ");
    let degreetype = "C"; // You can change it to F. (fahrenheit.)

    await weather.find({search: city, degreeType: degreetype}, function(err, result) {
        if (!city) return message.channel.send("Veuillez entrer le nom d'une ville.");
        if (err || result === undefined || result.length === 0) return message.channel.send("Je ne trouve pas cette ville... Pouvez-vous réessayer ?");

        let current = result[0].current;
        let location = result[0].location;

        const embed = new Discord.MessageEmbed()
        .setAuthor(current.observationpoint)
        .setDescription(`> ${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .setTimestamp()
        .setFooter('Kyo', client.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor(0x7289DA)

      // .addField("Latitude", location.lat, true)
        // .addField("Longitude", location.long, true)
        // .addField("Degrée", `${current.feelslike}° Degrees`, true)
        // .addField("Type de degrée", location.degreetype, true)
        // .addField("Vitesse du vents", current.winddisplay, true)
        // .addField("Humidité", `${current.humidity}%`, true)
        // .addField("Temps", `GMT ${location.timezone}`, true)
        // .addField("Température", `${current.temperature}° degrés`, true)
        // .addField("Observation Temp", current.observationtime, true)
         embed.addFields(
            { name: 'Latitude', value: location.lat, inline: true},
            { name: 'Longitude', value: location.long, inline: true },
            { name: 'Il fait', value: `${current.feelslike}°${location.degreetype}`, inline: true },
            { name: 'Type de degré', value: location.degreetype + '°', inline: true },
            { name: 'Vitesse du vent', value: current.winddisplay, inline: true },
            { name: 'Humidité', value: `${current.humidity}%`, inline: true },
            { name: 'Heure', value: `GMT ${location.timezone}`, inline: true },
            { name: 'Heure d\'observation', value: current.observationtime, inline: true }
        )

        return message.channel.send(embed);
    })
};

module.exports.help = MESSAGES.COMMANDS.UTILS.METEO;