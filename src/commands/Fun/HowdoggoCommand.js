const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class HowbasedCommand extends BaseCommand {
  constructor() {
    super('howdoggo', 'Fun', []);
  }

  async run(client, message, args) {
    const noArgs = new Discord.MessageEmbed()
    .setAuthor("You have to mention a user!")
    .setDescription(`\`\`ti!howdoggo (user)\`\``)
    .setColor("RED")

    const noUser = new Discord.MessageEmbed()
    .setAuthor("I couldn't find this user.")
    .setColor("RED")

    let member = message.mentions.users.first() || message.author
    let rng = Math.floor(Math.random() * 101);
    
    if(!args[0]) return message.channel.send(noArgs);
    if (!member) return message.channel.send(noUser);

    const howdoggoembed = new Discord.MessageEmbed()
    .setTitle(`Doggo Machine Calculator`)
    .setDescription(`${member.username} is `+ rng + "% doggo!")
    .setColor("YELLOW")

    message.channel.send(howdoggoembed)
   
  }
}