const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class PlayCommand extends BaseCommand {
  constructor() {
    super('play', 'Music', []);
  }

  async run(client, message, args) {
    
    message.member.voice.channel.join()
  .then(connection => {
      connection.voice.setSelfDeaf(true);
      
  });

    if(!message.member.voice.channel) return message.channel.send('Please, join a voice channel first!')
    const music = args.join(" ");
    if(!music) return message.channel.send("Please, provide a song!")

    await client.distube.play(message, music)
}  
}