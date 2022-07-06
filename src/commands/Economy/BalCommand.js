const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BalCommand extends BaseCommand {
  constructor() {
    super('social', 'Economy', []);
  }

  async run(client, message, args) {

    const member = message.mentions.members.first() || message.member;
    const bal = await client.bal(message.member.id);
    message.channel.send( bal + " Social credit scores. Praise to Xi Jinping");  
  }
}