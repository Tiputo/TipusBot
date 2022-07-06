const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const img = require('images-scraper')
const google = new img({
  puppeteer: {
    headless: true,
  }
})

module.exports = class GImageCommand extends BaseCommand {
  constructor() {
    super('image', 'Moderation', []);
  }

  async run(client, message, args) {
    const query = args.join(" ")
    if (!query) return message.channel.send('Please enter a search query.')

    const results = await google.scrape(query, 1)
    message.channel.send(results[0].url);
  }

}

