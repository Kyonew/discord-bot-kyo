const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        "type": String,
        "default": defaults.prefix
    },
    logChannelID: {
        "type": String,
        "default": defaults.logChannelID
    },
    welcomeChannelID: {
        "type": String,
        "default": defaults.welcomeChannelID
    },
    welcomeImage: {
        "type": String,
        "default": defaults.welcomeImage
    },
    logs: {
        "type": String,
        "default": defaults.logs
    },
    welcome: {
        "type": String,
        "default": defaults.welcome
    }
});

module.exports = mongoose.model("Guild", guildSchema);