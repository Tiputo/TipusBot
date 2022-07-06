const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PingMeCommand extends BaseCommand {
  constructor() {
    super('ping', 'moderation', []);
  }

  async run (client, message, args) {
    const pinging = new Discord.MessageEmbed()
    .setAuthor("Pinging...")

    const msg = await message.channel.send(pinging).then(r => r.delete({ timeout: 5000 }));

    const latency = Math.floor(
      msg.createdTimestamp - message.createdTimestamp
    )
    const ping = new Discord.MessageEmbed()
    .setDescription(`PONG! 🏓 Bot Latency:\`\`${latency}\`\`ms, API Latency:\`\`${Math.round(client.ws.ping)}\`\`ms`);
    message.channel.send(ping);
}
}