const { MessageFlags } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TellCommand extends BaseCommand {
  constructor() {
    super('tell', 'Moderation', []);
  }

  async run(client, message, args) {
    let botMessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botMessage);
  }
}