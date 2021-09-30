const fs = require("fs");
module.exports = (client, Discord) => {
    const command_files = fs.readdirSync(`./commands/`).filter(file => file.endsWith('js'));
    for (const file of command_files) {
        const command = require(`../commands/${file}`);
        console.log(`Loading Command: ${file}. 👌`, "log");
        if (command.name) {
            client.commands.set(command.name, command);
        } else {
            //console.log(`Unable to load command ${command.name}`);
            return;
        }
    }
}