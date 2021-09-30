const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const config = require("./config.js");
const client = new Client({
    intents: config.intents,
    partials: config.partials
  });
client.config = config;
client.commands = new Collection();
client.events = new Collection();

const init = async () => {


    ['command_handler', 'event_handler'].forEach(handler => {
      require(`./handlers/${handler}`)(client, Discord);
    })
    
    client.on("threadCreate", (thread) => thread.join());
    
    // Here we login the client.
    client.login();
    
    };
    
    init();