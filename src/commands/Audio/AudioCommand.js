const BaseCommand = require('../../utils/structures/BaseCommand');
const Commando = require('discord.js-commando');
const path = require('path');
module.exports = class AudioCommand extends BaseCommand {
  constructor() {
    super('audio', 'Moderation', []);
  }

  async run(client, message, args) {
const { voice } = message.member
if(!voice.channelID){
  message.channel.send('Musis byt ve voicu')
  return
}
voice.channel.join().then((connection) =>
{
  connection.play(path.join(__dirname, 'wakeywakey.m4a'))
})

  }
}