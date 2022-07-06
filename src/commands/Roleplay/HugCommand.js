const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require("node-fetch");
const Discord = require('discord.js')
module.exports = class HugCommand extends BaseCommand {
  constructor() {
    super('hug', 'Roleplay', []);
  }

  async run(client, message, args) {

    const noArgs = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('You have to mention someone!')
    .setTimestamp()

    if(!args[0]) return message.channel.send(noArgs);

    let HuggedUser =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.cache.get(args[1]);

    const HugEmbed = new Discord.MessageEmbed()
      .setFooter(
        `Requested By: ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setColor("RANDOM")
      .setDescription(`You hugged ${HuggedUser}!`)
      .setTimestamp();

    const { url } = await fetch("http://ram.gamearoo.top/api/hug")
      .then((res) => res.json())
      .catch((err) => {
        message.reply(`http://ram.gamearoo.top/api is not responding!`);

        return;
      });
    HugEmbed.setImage(url);

    message.channel.send(HugEmbed);
  }
}