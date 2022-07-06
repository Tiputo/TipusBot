const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class ReportCommand extends BaseCommand {
  constructor() {
    super('suggest', 'Moderation', []);
  }

  async run(client, message, args) {
    const owner = client.users.cache.get('768977515217551370')
const query = args.join(" ");
if(!query) return message.reply('Please specify a query.');
const reportEmbed = new Discord.MessageEmbed()
.setTitle('Suggest')
.addField('Author', message.author.toString(), true)
.addField('Guild', message.guild.name, true)
.addField('Suggestion', query)
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setTimestamp();

message.channel.send("Successfully suggested.")
owner.send(reportEmbed)
  }
}