const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const axios = require('axios'); 
module.exports = class BasedCraftRankCommand extends BaseCommand {
  constructor() {
    super('bcrank', 'BasedCraft', []);
  }

  async run(client, message, args) {
    axios
    .get(`https://www.minecraft-list.cz/api/server/basedcraft/`)
    .then((res) => {
    
      console.log(res);
      const sracka = new Discord.MessageEmbed()

      .setAuthor(`${res.data.rank}. BasedCraft`)
      .setColor("RANDOM")
      .setDescription(`Momentálně jsou **${res.data.votes}** votů na serveru.`)
      .setFooter("nezapomeň votit, jinak zdechneš")
     message.channel.send(sracka)
    })
    .catch((err) => {
      console.error(err)}
    )
  }
}

// 