const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const axios = require('axios'); 
module.exports = class OsuUserCommand extends BaseCommand {
  constructor() {
    super('user', 'Osu', []);
  }

  async run(client, message, args) {
    const users = args.join(" ");
    if (!users) {
      return message.channel.send("Please, type the account")
          .then(m => m.delete(5000));
  }
      axios
      .get(`https://osu.ppy.sh/api/v2/`)
      .then((res) => {
      
        console.log('RES:', res);
        
        const sracka = new Discord.MessageEmbed()
  
        .setAuthor(`osu!user`)
        .setColor("RANDOM")
        .setDescription(`**${res.users}`)
 
       message.channel.send(sracka)
    
      })
      .catch((err) => {
        console.error('ERR:', err)}
      )
      }
    
}