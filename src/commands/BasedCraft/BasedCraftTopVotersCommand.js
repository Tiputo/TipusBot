const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const axios = require('axios'); 
const Commando = require('discord.js-commando');
module.exports = class BasedCraftTopVotersCommand extends BaseCommand {
  constructor() {
    super('bcvoters', 'BasedCraft', []);
  }

  async run(client, message, args) {
    axios
    .get(`https://www.minecraft-list.cz/api/top-voters/basedcraft`)
    .then((res) => {
    
      console.log(res);
      
      const sracka = new Discord.MessageEmbed()

      .setAuthor(`Top 20 voterů na BasedCraftu test`)
      .setColor("RANDOM")

      .addField(` `)
     message.channel.send(sracka)
  
    })
    .catch((err) => {
      console.error('ERR:', err)}
    )
  }
}

// https://www.youtube.com/watch?v=Sz2bOxZ48iY  - inspirace
// https://codehandbook.org/how-to-make-api-calls-inside-for-loop-in-javascript/
// https://www.youtube.com/watch?v=IF3aEg35eKA
// https://www.minecraft-list.cz/api-dokumentace