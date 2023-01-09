function loadCommands(client) {
  const ascii = require('ascii-table');
  const fs = require('fs');
  const table = new ascii().setHeading("Command", "Status");

  const commandsArray = [];

  const commandsFolder = fs.readdirSync('./Commands');
  for(const folder of commandsFolder) {
    const commandFiles = fs.readdirSync(`./Commands/${folder}`);

    for(const file of commandFiles) {
      const commandFile = require(`../Commands/${folder}/${file}`);

      client.commands.set(commandFile.data.name, commandFile);

      commandsArray.push(commandFile.data.toJSON());
      
      table.addRow(file, "loaded");
      continue;
    }
  }

  client.application.commands.set(commandsArray);
  
  return console.log(table.toString(), "\nLoaded commands.");
}

module.exports = {loadCommands};