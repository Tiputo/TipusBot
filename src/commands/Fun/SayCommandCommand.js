const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
 
module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }
 
  async run(client, message, args) {
    const messageToSay = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()

     .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
     .setDescription(`${messageToSay}`)
     .setColor("#84daf8")
     .setTimestamp();
  try {
   await message.channel.send(sayEmbed);
   } catch (err) {
     console.log(err);
     message.channel.send(`U can't type that.`);
   }
   
   message.delete({timeout: 10});

  }
  
}