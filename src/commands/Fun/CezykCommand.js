const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client, MessageAttachment } = require('discord.js');


module.exports = class CusCommand extends BaseCommand {
  constructor() {
    super('cezyk', 'moderation', []);
  }

  async run(client, message, args) {
      const image = new MessageAttachment('https://media.discordapp.net/attachments/751453850283802644/806105655047356416/ELNo_Sabe.gif');
      message.channel.send(`cezyk smrdí`, image);

  }
}