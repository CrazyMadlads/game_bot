const config = require("../config.js");
const { settings } = require("./settings.js");

function getSettings(guild) {
    settings.ensure("default", config.defaultSettings);
    if (!guild) return settings.get("default");
    const guildConf = settings.get(guild.id) || {};
    return ({...settings.get("default"), ...guildConf});
  }

  module.exports = { getSettings };