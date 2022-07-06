const { id } = require('common-tags');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AddCommand extends BaseCommand {
  
  constructor() {
    super('add', 'Economy', []);
  }
  
  async run(client, message, args) {
    const member = message.mentions.members.first() || message.member;
    const coins = parseInt(args[0]);

    message.channel.send(`+${coins} Social credit scores. Praise to Xi Jinping`)
    client.remove(message.author.id, coins);
  }
}