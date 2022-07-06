//UPRAVIT EMBED!!!!!


const BaseCommand = require('../../utils/structures/BaseCommand');
const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = class WeatherCommand extends BaseCommand {
  constructor() {
    super('weather', 'Moderation', []);
  }

  async run(client, message, args) {
    const invPl = new Discord.MessageEmbed()
    .setAuthor(`Please, specify a location.`)
    .setColor("#FF0000")

    const unkPl = new Discord.MessageEmbed()
    .setAuthor(`Unknown location.`)
    .setColor("#FF0000")

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
      if(error) return message.channel.send(invPl);
      if(!args[0]) return message.channel.send(invPl)

      if(result === undefined || result.length === 0) return message.channel.send(unkPl);

      var current = result[0].current;
      var location = result[0].location;

      const weatherinfo = new Discord.MessageEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Weather forecast for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor('RANDOM')
      .addField('Timezone', `UTC ${location.timezone}`, true)
      .addField('Degree Type', 'Celsius', true)
      .addField('Temperature', `${current.temperature}°`, true)
      .addField('Wind', current.winddisplay, true)
      .addField('Feels like', `${current.feelslike}°`, true)
      .addField('Humidity', `${current.humidity}%`, true)


      message.channel.send(weatherinfo)
      })        
  }
}