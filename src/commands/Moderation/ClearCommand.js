// UDELAT TO EMBED!!

const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'moderation', []);
  }

  async run (client, message, args) {

    const nopremEmbed = new Discord.MessageEmbed()
    .setAuthor("You don't have premission to use this command!")
    .setColor("#FF0000")

    const amountEmbed = new Discord.MessageEmbed()
    .setAuthor("Please provide an amount of messages to delete!")
    .setColor("#FF0000")

    const bigamountEmbed = new Discord.MessageEmbed()
    .setAuthor("You can't delete more than 100 messages at once!")
    .setColor("#FF0000")

    const smallamountEmbed = new Discord.MessageEmbed()
    .setAuthor("You have to delete at least 1 message!")
    .setColor("#FF0000")

    const deletedEmbed = new Discord.MessageEmbed()
    .setAuthor(`Deleted ${args[0]} messages.`)
    .setColor("#FF0000")

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopremEmbed);

    const amount = args.join(" ");

    if(!amount) return message.channel.send(amountEmbed)

    if(amount > 100) return message.channel.send(bigamountEmbed)

    if(amount < 1) return message.channel.send(smallamountEmbed)

    await message.channel.messages.fetch({limit: amount}).then(messages => {
        message.channel.bulkDelete(messages
)});


message.channel.send(deletedEmbed).then(r => r.delete({ timeout: 5000 }));

}
}