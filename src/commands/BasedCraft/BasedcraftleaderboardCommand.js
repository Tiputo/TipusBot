const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const axios = require('axios');
module.exports = class BasedcraftleaderboardCommand extends BaseCommand {
  constructor() {
    super('aa', 'BasedCraft', []);
  }

  async run(client, message, args) {
    axios
    .get("https://czech-craft.eu/api/server/based-craft-1-17-1/votes/2020/11/")
    .then((res) => {
      console.log(res.data);
      const sracka = new Discord.MessageEmbed()
      .setAuthor(`BasedCraft`)
      .setColor("RANDOM")
      .setDescription(`Jmeno: ${res.data.username}, datetime: ${res.data.datetime} delivered: ${res.data.delivered}`)

      .setFooter("nezapomeň votit, jinak zdechneš")
     message.channel.send(sracka)

    
    })
    .catch((err) => {
      console.error(err)}
    )
  } 
}

//https://czech-craft.eu/api/