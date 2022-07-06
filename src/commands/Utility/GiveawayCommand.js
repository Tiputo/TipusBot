const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require('ms');
const Discord = require('discord.js')
module.exports = class GiveawayCommand extends BaseCommand {
  constructor() {
    super('giveaway', 'Utility', []);
  }

  async run(client, message, args) {

    const noArgs = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor(`You did not specify your time!`)
    .setDescription(`\`\`example: ti!giveaway 10s #general 1 free nitro\`\``)
    .setTimestamp()



    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You don\'t have premission to use this command!');

    if (!args[0]) return message.channel.send(noArgs);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")

    )
      return message.channel.send(
        `You did not use the correct formatting for the time! (s - seconds, m - minute, h - hour, d - day)`
      );

    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I could not find that channel in the guild!`
      );

    let time = args[0]

    let giveawayWinners = args[2];

    if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners!');

    let prize = args.slice(3).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`*Giveaway created in ${channel}*`);

    let Embed = new Discord.MessageEmbed()
      .setTitle(`🎉 New giveaway for ${prize} 🎉`)
      .setDescription(
        `The user ${message.author} is hosting a giveaway for the prize of **${prize}**!\n Time Remaining: **${time}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`)
      .setFooter(`React to join the giveaway! ${giveawayWinners} winner(s).`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        return message.channel.send(
          `Not enough people reacted for me to start draw a winner!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `The winner of the giveaway for **${prize}** is ${winner} ! Congratulations!`
      );
    }, ms(args[0]));
  }
}