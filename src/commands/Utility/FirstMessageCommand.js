const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class FirstMessageCommand extends BaseCommand {
  constructor() {
    super('firstmessage', 'Moderation', []);
  }

  async run(client, message, args) {

    const fetchMessages = await message.channel.messages.fetch({after: 1, limit: 1});
    const msg = fetchMessages.first();

    const fmEmbed = new Discord.MessageEmbed()
    .setTitle(`First message in ${message.guild.name}`)
    .setURL(msg.url)
    .setThumbnail(msg.author.displayAvatarURL({dynamic: true}))
    .setDescription("Message: " + msg.content)
    .addField("Author", msg.author, true)
    .addField("Message ID", msg.id, true)
    .addField("Created at", message.createdAt.toLocaleDateString(), true)

    message.channel.send(fmEmbed)


  }
}