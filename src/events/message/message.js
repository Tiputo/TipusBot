
const {DiscordAPIError} = require('discord.js');
const db = require('quick.db');
const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require('discord.js');  
const { search } = require('superagent');
const cooldown = new Map();


module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);

      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
     

    }
    
  }
}
