const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const disbut = require('discord-buttons')
module.exports = class ButtonCommand extends BaseCommand {
  constructor() {
    super('button', 'Utility', []);
  }

  async run(client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setTitle('test')
    .setColor('RANDOM');

    let button = new disbut.MessageButton()
    .setStyle('green')
    .setLabel('Yes')
    .setID('yes');
    
      let button1 = new disbut.MessageButton()
      .setStyle("url")
      .setLabel('No')
      .setID('no')
      .setURL('https://www.youtube.com/')

      message.channel.send({
        buttons: [button, button1],
        embed: embed
      })
  }
}