const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Moderation', []);
  }

  async run(client, message, args) {
    //EMBED MESSAGES
    const nopremEmbed = new Discord.MessageEmbed()
      .setAuthor("You don't have premission to use this command!")
      .setColor("#FF0000")

    const mustmentionEmbed = new Discord.MessageEmbed()
      .setAuthor("You need to mention a user.")
      .setColor("#FF0000")

    const notInServerEmbed = new Discord.MessageEmbed()
      .setAuthor("This user is not on this server.")
      .setColor("#FF0000")

    const cannotKickMyselfEmbed = new Discord.MessageEmbed()
      .setAuthor("You cannot kick yourself!")
      .setColor("#FF0000")

    const giveReasonEmbed = new Discord.MessageEmbed()
      .setAuthor("Please give it a reason!")
      .setColor("#FF0000")

      const cannotKickEmbed = new Discord.MessageEmbed()
      .setAuthor("This user can\'t be kicked. It is either because they are a mod/admin, or their highest role is higher than mine")
      .setColor("#FF0000")
    //EMBED MESSAGES

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(nopremEmbed)
    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!args[0]) return message.channel.send(mustmentionEmbed);
    if (!target) return message.channel.send(notInServerEmbed);
    if(!target.kickable) return message.channel.send(cannotKickEmbed);
   

    if (target.id == message.author.id) {
      return message.channel.send(cannotKickMyselfEmbed)
    }

    let reason = args.slice(1).join(' ')

    if (!reason) return message.channel.send(giveReasonEmbed)

    let embed = new discord.MessageEmbed()
      .setTitle("Member kicked")
      .addField("Member", target.user.tag)
      .addField("Moderator", message.author.tag)
      .addField("Reason", `${reason}`)
    await message.channel.send(embed)
    await target.kick(reason)

    const kickEmbed = new Discord.MessageEmbed()
    
      .setTitle(`You have been kicked from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("#2A9DF4")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    target.send(kickEmbed);
  }
}