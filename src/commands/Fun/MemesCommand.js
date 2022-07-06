
const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const got = require('got');
const { response } = require('express');

module.exports = class MemesCommand extends BaseCommand {
  constructor() {
    super('meme', 'Fun', []);
  }

  async run (client, message, args) {
    got('https://www.reddit.com/r/shitposting/random.json').then(response => {
      let content = JSON.parse(response.body)
      let permalink = content[0].data.children[0].data.permalink;
      let memeTitle = content[0].data.children[0].data.title;
      let memeImage = content[0].data.children[0].data.url;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;

      const embed = new Discord.MessageEmbed()
      .setTitle(`${memeTitle}`)
      .setImage(memeImage)
      .setFooter(`🢁 ${memeUpvotes} 🢃 ${memeDownvotes} 💬 ${memeNumComments}`)

      message.channel.send(embed)
    }).catch(err => console.log(err))
  }
 }