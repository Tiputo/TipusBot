const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PollCommand extends BaseCommand {
  constructor() {
    super('poll', 'Moderation', []);
  }

  async run(client, message, args) {

    const noArgs = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('You are missing some arguments.')
    .setDescription(`\`\`ti!poll [question]\`\``)
    .setTimestamp()

    const noPrem = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('You don\'t have premission to use this command!')
    .setTimestamp()

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noPrem);
  
    if (!args[0]) return message.channel.send(noArgs);
  
    const pollEmbed = new Discord.MessageEmbed()
      .setColor(0xffffff)
      .setFooter(`React to vote - Poll Created By ${message.author.username}`)
      .setTitle(args.join(' '))
  
    let msg = await message.channel.send(pollEmbed);
  
    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 500});
  }
} 