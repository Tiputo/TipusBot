
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'moderation', []);
  }

  async run(client, message, args){
  let user; 
  if(message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]){
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }

  let avatar = user.displayAvatarURL({size: 4096, format: "png", dynamic: true});
   const Embed = new Discord.MessageEmbed()
   .setTitle(`${user.tag} Avatar`)
   .setDescription(`[Avatar URL](${avatar})`)
   .setColor('RANDOM')
   .setImage(avatar);

   message.channel.send(Embed);
   }
}

