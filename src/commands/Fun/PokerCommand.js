const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports = class PokerCommand extends BaseCommand {
  constructor() {
    super('poker', 'Fun', []);
  }

  async run(client, message, args) {
    const vcEmbed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('You have to be in a voice chat!')

    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send(vcEmbed)

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755827207812677713",
            target_type: 2,
            temporary: false,
            validate: null
        }),
        headers: {
            "Authorization": `Bot ${client.token}`,
            "Content-Type": "application/json"
        }
    })
    
    .then(res => res.json())
    .then(invite => {
        if(!invite.code) return message.channel.send("Sorry, I can't start the Poker!")

        const embed = new Discord.MessageEmbed()
        .setAuthor('Poker Night')
        .setDescription(`**Click the button below to start!**`)
        .setColor('PURPLE');

        const button = new disbut.MessageButton()
      .setStyle("url")
      .setLabel('Click me! 🃏')
      .setID('url')
      .setURL(`https://discord.com/invite/${invite.code}`)

      message.channel.send({
        button: button,
        embed: embed
      })
    })
}
}