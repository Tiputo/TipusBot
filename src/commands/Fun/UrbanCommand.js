const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const urban = require('relevant-urban');
module.exports = class UrbanCommand extends BaseCommand {
  constructor() {
    super('urban', 'Fun', []);
  }

  async run(client, message, args) {
    if(!args[0]) return message.channel.send("Please specify something.")
    let result = await urban(args[0]).catch(e => {
      return message.channel.send(`Unknown phrase for ${args[0]}, please try again.`);

    })

    const urbanEmbed = new Discord.MessageEmbed()
    .setTitle(result.word)
    .setURL(result.urbanURL)
    .setThumbnail("https://cdn.discordapp.com/attachments/783323105325219850/813815507517964308/297387706245_85899a44216ce1604c93_512.jpg")
    .setDescription(`**Definition:** \n ${result.definition} \n \n **Example:** ${result.example}** `)
    .addField("Author", result.author, {dynamic: true})
    .addField("Rating", `👍 ${result.thumbsUp.toLocaleString()} | 👎 ${result.thumbsDown.toLocaleString()}`)

    if(result.tags.length > 0 && result.tag.join(" ").length < 1024 
    ){
      urbanEmbed.addField("Tags", result.tags.join(", "), {dynamic: true})
    }
    return message.channel.send(urbanEmbed);
  }

}