const { MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

  async run(client, message, args) {
    const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/564345151841894412/813111831442227250/544acec2-dcf3-440e-9bd5-3c7714a9d94d-profile_image-300x300.png');
    message.channel.send('jsem tu pořád', attachment);
  }
}