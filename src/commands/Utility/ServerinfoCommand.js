const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class BotInfoCommand extends BaseCommand {
  constructor() {
    super('serverinfo', 'Moderation', []);
  }

  async run (client, message, args) {

    
    const serverIcon = message.guild.iconURL();
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.guild}'s Server info`, serverIcon)
    .setThumbnail(serverIcon)
    .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, {dynamic: true})
    .addField("ID", `${message.guild.id}`, true)
    .addField('Created', message.guild.createdAt.toLocaleString(), true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("AFK Timeout", `${message.guild.afkTimeout / 60} minutes`, true)
    .addField("Verification Level", `${message.guild.verificationLevel}`, true)
    .addField("Members",` ${message.guild.memberCount} users`, true)
    .addField("Emoji Count", `${message.guild.emojis.cache.size} emojis`, true)
    .addField("Roles Count", `${message.guild.roles.cache.size} roles`, true)
    .addField("Boosters", `${message.guild.premiumSubscriptionCount} boosters`, true)

     message.channel.send(embed)
  }
}