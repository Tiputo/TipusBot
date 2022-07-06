const BaseCommand = require('../../utils/structures/BaseCommand');
const figlet = require('figlet');
const Discord = require('discord.js');
module.exports = class AsciiCommand extends BaseCommand {
  constructor() {
    super('ascii', 'Fun', []);
  }

  async run(client, message, args) {

    const noArgs = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('Please, provide some text.')
    .setTimestamp()
 
    const Error = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('Something went wrong.')
    .setTimestamp()

    const longChar = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('Please, provide text shorter than 2000 characters.')
    .setTimestamp()
    
    if(!args[0]) return message.channel.send(noArgs);

    const msg = args.join(" ");

    figlet.text(msg, function (err, data){
        if(err){
            console.log(Error);
            console.dir(err);
        }
        if(data.length > 2000) return message.channel.send(longChar)

        message.channel.send('```' + data + '```')
    })
    message.delete({timeout: 10});
}
}