const BaseCommand = require('../../utils/structures/BaseCommand');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');


module.exports = class AnimeCommand extends BaseCommand {
  constructor() {
    super('anime', 'Moderation', []);
  }

  async run(client, message, args) {
    var search = message.content.split(/\s+/g).slice(1).join(" ");

    if(!args[0]) return message.channel.send("Please specify anime movie.")
    kitsu.searchAnime(search).then(async result => {
      if(result.length === 0) return message.channel.send("An invalid anime.")

      let anime = result[0]
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${anime.titles.english ? anime.titles.english : search} (${anime.titles.romaji}) | ${anime.showType}`, anime.posterImage.original)
      .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
      .addField('Information', `\n **Age Rating: **${anime.ageRating}\n\ **NSFW: ** ${anime.nsfw ? 'Yes' : 'No'}`, {dynamic: true})
      .addField('Stats', `**Average Rating: ** ${anime.averageRating} / 100 \n\ **Rank by rating: **${anime.ratingRank}\n\ **Rank by popularity: **${anime.popularityRank}`, {dynamic:true})
      .addField('**Start Date:**   ', anime.startDate ? new Date(anime.startDate).toDateString() : '???', true)
      .addField('**End Date:**', anime.endDate ? new Date(anime.endDate).toDateString() : '???', true)
      .addField('Status', `**Episode Count: ** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n`, true)
      .setThumbnail(anime.posterImage.original, 100, 200);
      return message.channel.send(embed)

    }).catch(err => {
      console.log(err)
      return message.channel.send(`Couldn't find result for ${search}`)
    })
  }
}