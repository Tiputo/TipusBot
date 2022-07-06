const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
module.exports = class ballCommand extends BaseCommand {
  constructor() {
    super('8ball', 'Fun', []);
  }

  async run(client, message, args) {

    const noQ = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('Doesn\'t look like a question.')
    .setDescription(`\`\`ti!8ball (question)?\`\``)
    .setTimestamp()

    const fullArgs = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('Please, ask a full question.')
    .setDescription(`\`\`ti!8ball (question)?\`\``)
    .setTimestamp()
    
    if (!args[0]) return message.channel.send(fullArgs)
  
    let reply = ["Yes.",
    "Of course.",
    "Definitely.",
    "No.",
    "Not in a million years",
    "Can't really tell.",
    "Never.",
    "Absolutely.",
    "Hell, yes.",
    'I hope so.',
    'Maybe.',
    'Certainly not.',
    'Pfft.',
    'Possibly.',
    'I would rather not say.',
    'Who cares?',
    'The future is bleak.'];

    let result = Math.floor((Math.random() * reply.length));
    let question = args.slice().join(" ");

    if (!question.endsWith("?"))
    return message.channel.send(noQ);
    

    let BallEmbed = new Discord.MessageEmbed()
    .setAuthor(`🎱 ${message.author.username}`)
    .setColor("#000000")
    .addField("Question", question)
    .addField("Answer", reply[result]);

    message.channel.send(BallEmbed)
    

  }
}