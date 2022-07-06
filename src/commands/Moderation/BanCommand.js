const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'Moderation', []);
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

 const cannotBanMyselfEmbed = new Discord.MessageEmbed()
   .setAuthor("You cannot ban yourself!")
   .setColor("#FF0000")

 const giveReasonEmbed = new Discord.MessageEmbed()
   .setAuthor("Please give it a reason!")
   .setColor("#FF0000")

 //EMBED MESSAGES

 if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(nopremEmbed)
 let target = message.mentions.members.first()

 if (!args[0]) return message.channel.send(mustmentionEmbed);
 if (!target) return message.channel.send(notInServerEmbed);

 if (target.id == message.author.id) {
   return message.channel.send(cannotBanMyselfEmbed)
 }


 let reason = args.slice(1).join(' ')

 if (!reason) return message.channel.send(giveReasonEmbed)

 let embed = new discord.MessageEmbed()
   .setTitle("Member banned")
   .addField("Member", target.user.tag)
   .addField("Moderator", message.author.tag)
   .addField("Reason", `${reason}`)
 await message.channel.send(embed)
 await target.ban({reason:reason})

 const banEmbed = new Discord.MessageEmbed()
 
   .setTitle(`You have been banned from ${message.guild.name}`)
   .setDescription(`Reason: ${reason}`)
   .setColor("#2A9DF4")
   .setTimestamp()
   .setFooter(client.user.tag, client.user.displayAvatarURL());

 target.send(banEmbed);
}
}