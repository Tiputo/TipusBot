const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class StopCommand extends BaseCommand {
  constructor() {
    super('stop', 'Music', []);
  }

  async run(client, message, args) {
    if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");

    await client.distube.stop(message)
    await message.channel.send("**stopped playing**");

  }
}