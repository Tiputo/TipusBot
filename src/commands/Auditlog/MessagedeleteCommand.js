const Discord = require('discord.js');
const db = require('quick.db');
// BUGGED
  module.exports = async (message) => {
    if (message.partial) await message.fetch();

    let modlog = db.set(`moderation.${message.guild.id}.modlog`);
    if(!modlog) return;

    let toggle = modlog.toggle;
    if (!toggle || toggle == null || toggle == false) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Message deleted")
    .setDescription(`Message deleted in <#${message.channel.id}> by **${message.author.tag}** \n> ${message.content}`)
    .setTimestamp();

    return message.guild.channel.cache.get(modlog.channel).send(embed);

  }