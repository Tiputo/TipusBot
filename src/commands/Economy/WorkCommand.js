const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WorkCommand extends BaseCommand {
  constructor() {
    
    super('work', 'Economy', []);
    
  }

  async run(client, message, args) {
    const jobs = ['debil', 'debil2', 'debil3']

    const job = Math.floor(Math.random() * jobs.length);
    const coins = Math.floor(Math.random() * 200) + 1;

    message.channel.send(`You worked for Xi Jinping for and earned ${coins} Social credit scores`);
    client.add(message.author.id, coins);
  }
}