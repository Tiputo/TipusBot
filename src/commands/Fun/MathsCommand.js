const maths = require('mathjs');
const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
module.exports = class MathsCommand extends BaseCommand {
  constructor() {
    super('math', 'moderation', []);
  }

  async run(client, message, args) {

    const questionEmbed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('Please, enter a question.')

    const validEmbed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('Please, enter a valid question.')
    
    if(!args[0]) return message.channel.send(questionEmbed);

    let resp;
    try{
      resp = maths.evaluate(args.join(" "))
    } catch (e) {
      return message.channel.send(validEmbed);
    }

    const embed = new Discord.MessageEmbed()
    .setTitle('Calculator')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
    
    message.channel.send(embed);


  }
}