const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const axios = require('axios');

module.exports = class BasedcraftCommand extends BaseCommand {
  constructor() {
    super('bccc', 'BasedCraft', []);
  }

  async run(client, message, args) {
   
    axios
    .get("https://czech-craft.eu/api/server/based-craft-1-17-1/")
    .then((res) => {
      console.log(res);
    
      const sracka = new Discord.MessageEmbed()

      
      .setAuthor(`${res.data.position}. BasedCraft`)
      .setColor("RANDOM")
      .setDescription(`momentálně jsou **${res.data.votes}** votů`)

      .setFooter("nezapomeň votit, jinak zdechneš")
     message.channel.send(sracka)
  


    })
    .catch((err) => {
      console.error(err)}
    )
  } 
}



// get inspiration from instagram command (prolly more useful than this one)