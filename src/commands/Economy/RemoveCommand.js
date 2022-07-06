const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RemoveCommand extends BaseCommand {
  constructor() {
    super('rm', 'Economy', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send(`You don't have premission to add social credit scores.`)
    const member = message.mentions.members.first() || message.member;
    const coins = parseInt(args[0]);

    message.channel.send(`-${coins} Social credit scores. Praise to Xi Jinping`)
    client.remove(message.author.id, coins);
  }
}