const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const disbut = require('discord-buttons')

module.exports = class YttogetherCommand extends BaseCommand {
  constructor() {
    super('ytt', 'Utility', []);
  }


  async run(client, message, args) {
    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send("You have to be in a voice chat!")


    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755600276941176913",
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
        if(!invite.code) return message.channel.send("Sadly i cant start a yt together")


        const embed = new Discord.MessageEmbed()
        .setAuthor('YouTube Together')
        .setDescription(`**Click the button below to start!**`)
        .setThumbnail('https://www.woodvale.wa.edu.au/site-images/yt-icon/image')
        .setColor('RED');

        const button = new disbut.MessageButton()
      .setStyle("url")
      .setLabel('Click me! 📺')
      .setID('url')
      .setURL(`https://discord.com/invite/${invite.code}`)


      message.channel.send({
        button: button,
        embed: embed
      })
    })
}
}