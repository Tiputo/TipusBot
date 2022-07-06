const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const axios = require('axios'); 
module.exports = class BasedcraftCzechlistCommand extends BaseCommand {
  constructor() {
    super('bc', 'BasedCraft', []);
  }

  async run(client, message, args) {
    const username = args.join(" ");
      if (!username) {
        
        return message.channel.send("Please, type the account")
            .then(m => m.delete(5000));
    }
    axios
    .get(`https://www.minecraft-list.cz/api/server/basedcraft/player/${username}`)
    .then((res) => {
    
      console.log(res);
      const sracka = new Discord.MessageEmbed()

      .setAuthor(`BasedCraft`)
      .setColor("RANDOM")

      .setDescription(`**${res.data.username}** má momentálně **${res.data.votes_count}** vote(s)`)

      .setFooter("nezapomeň votit, jinak zdechneš")
     message.channel.send(sracka)
  
    })
    .catch((err) => {
      console.error(err)}
    )
  }
}