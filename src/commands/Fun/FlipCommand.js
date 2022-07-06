const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class FlipCommand extends BaseCommand {
  constructor() {
    super('flip', 'Fun', []);
  }

  async run(client, message, args) {
   let choices = ["tails", "heads"];
   const choice = choices[Math.floor(Math.random() * choices.length)];
   const embed = new Discord.MessageEmbed()
     .setDescription(`You flipped **${choice}!**`)
   
   message.channel.send(embed);
   
  }
}