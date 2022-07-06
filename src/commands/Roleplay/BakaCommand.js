const BaseCommand = require('../../utils/structures/BaseCommand');
const superagent = require('superagent');
const Discord = require('discord.js');
module.exports = class BakaCommand extends BaseCommand {
  constructor() {
    super('baka', 'Roleplay', []);
  }

  async run(client, message, args) {

    const validEmbed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('I can\'t find this member.')

    const noArgs = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('You have to mention someone.')
    .setTimestamp()

    let BakaUser =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.cache.get(args[1]);

      let resp;
    try{
      resp = maths.evaluate(args.join(" "))
    } catch (e) {
      return message.channel.send(validEmbed);
    }

      if(!args[0]) return message.channel.send(noArgs);

      
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/baka");
    const BakaEmbed = new Discord.MessageEmbed()
    .setDescription(`You are baka, ${BakaUser}!`)
    .setColor("RANDOM")
    .setImage(body.url)
    .setFooter(
      `Requested By: ${message.author.tag}`,
      message.author.avatarURL({ dynamic: true })
    )

    message.channel.send(BakaEmbed)
  }
}