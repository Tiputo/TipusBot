const BaseCommand = require('../../utils/structures/BaseCommand');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = class MangaCommand extends BaseCommand {
  constructor() {
    super('manga', 'Search', []);
  }

  async run(client, message, args) {

    const noArg = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('Please specify the manga.')
    .setTimestamp()

    const Invalid = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('An invalid manga.')
    .setTimestamp()

    var search = message.content.split(/\s+/g).slice(1).join(" ");

    if(!args[0]) return message.channel.send(noArg)
    kitsu.searchManga(search).then(async result => {
      if(result.length === 0) return message.channel.send(Invalid)

      let manga = result[0]
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${manga.titles.english ? manga.titles.english : search} (${manga.titles.romaji}) | ${manga.subType}`, manga.posterImage.original)
      .setDescription(manga.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
      .addField('Information', `\n **Age Rating: **${manga.ageRating}\n\ **NSFW: ** ${manga.nsfw ? 'Yes' : 'No'}`, {dynamic: true})
      .addField('Stats', `**Average Rating: ** ${manga.averageRating} / 100 \n\ **Rank by rating: **${manga.ratingRank}\n\ **Rank by popularity: **${manga.popularityRank}`, {dynamic:true})
      .addField('**Start Date:**   ', manga.startDate ? new Date(manga.startDate).toDateString() : '???', true)
      .addField('**End Date:**', manga.endDate ? new Date(manga.endDate).toDateString() : '???', true)
      .addField('Status', ' **Volumes / Chapters:**', `${manga.volumeCount || '???'} / ${manga.chapterCount || '???'}`, true)
      .setThumbnail(manga.posterImage.original, 100, 200);
      return message.channel.send(embed)

    }).catch(err => {
      console.log(err)
      return message.channel.send(`Couldn't find result for ${search}`)
    })
  }
}