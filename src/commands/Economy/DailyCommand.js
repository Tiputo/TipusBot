const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DailyCommand extends BaseCommand {
  
  constructor() {
    super('daily', 'Economy', []);
  }

  
  async run(client, message, args) {
    const coins = Math.floor(Math.random() * 400) + 1;

    message.channel.send(`You got ${coins} Social credit scores from daily reward`);
    client.add(message.author.id, coins);
  }
}