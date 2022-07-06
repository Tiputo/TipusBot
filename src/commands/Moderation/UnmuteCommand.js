//UPRAVIT!!!!!

const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'Moderation', []);
  }

  async run (client, message, args) {

    const user1 = message.mentions.users.first() || message.member.user

    const noPrem = new Discord.MessageEmbed()
    .setTitle(`You don't have premission to use this command!`)
    .setColor("#FF0000")
    .setTimestamp()

      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(noPrem);

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let role = message.guild.roles.cache.find(x => x.name === "Muted");

    if(user.roles.cache.has(role)) return message.channel.send("This user isn't muted.");
    user.roles.remove(role);

    const unmuteEmbed = new Discord.MessageEmbed()
    .setAuthor(`${user1.username} is now unmuted.`, user1.displayAvatarURL())
    .setColor("#00FF00")

    message.channel.send(unmuteEmbed)
}
}