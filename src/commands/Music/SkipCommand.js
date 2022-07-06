const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SkipCommand extends BaseCommand {
  constructor() {
    super('skip', 'Music', []);
  }

  async run(client, message, args) {
    if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");
    await client.distube.skip(message)
    await message.channel.send("Skipped the song!")
  }
} 