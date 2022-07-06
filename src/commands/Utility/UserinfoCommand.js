//UPRAVIT!!!!!

const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const Commando = require('discord.js-commando');
const { Client, Intents } = require('discord.js'); 
const client = new Client({ ws: { intents: Intents.ALL } });
module.exports = class UserinfoCommand extends BaseCommand {
  constructor() {
    super('userinfo', 'Moderation', []);
  }

  async run(client, message, args) {
    
    const { guild, channel } = message
    
    const user = message.mentions.users.first() || message.member.user 
    const member = guild.members.cache.get(user.id)
    const userIcon = user.displayAvatarURL({dynamic: true})
    console.log(member)

    const embed = new MessageEmbed()
      .setAuthor(`${user.username}`, userIcon )
      .setThumbnail(userIcon)
      .setColor('RANDOM')
      .addFields(
        {
          name: 'User tag',
          value: user.tag, dynamic: true
          
        },
        {
          name: 'Nickname',
          value: member.nickname || 'None', inline: true, 
        },

        {
          name: '🆔 ID',
          value: user.id, inline: true
          
        },

        {
          name: '🤖 Bot',
          value: user.bot, inline: true
        },

        {
          name: '❓ Status',
          
          value: user.presence.status, inline: true
        },

        {
          name: '📅 Joined Server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(), inline: true
        },
        {
          name: '📅 Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(), inline: true
        }, 
        
        {
          name: '🎭 Total roles',
          value: member.roles.cache.size - 1, inline: true
        },

        
      
      )

    channel.send(embed)
  }
}