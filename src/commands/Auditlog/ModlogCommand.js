const chalk = require('chalk');
const { eventNames } = require('superagent');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = class ModlogCommand extends BaseCommand {
  constructor() {
    super('modlog', 'Moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have premission to use this command!')

    let toggling = ['disable', 'enable'];

    if (!args[0]) return message.channel.send('Please, enter something. Enable/disable')

    if(args[0] == "enable")
    {
      let channel = message.mentions.channels.first();
      if (!channel) return message.channel.send("Please, provide the name of the channel you want to create.");

      await db.set(`moderation.${message.guild.id}.modlog.toggle`, true);
      await db.set(`moderation.${message.guild.id}.modlog.channel`, channel.id);
      return message.channel.send(`Audit log has been enabled for <#${channel.id}>`);
    }
      if(args[0] == "disable")
      {
        let toggle = db.get(`moderation.${message.guild.id}.modlog.toggle`);
        if (!toggle || toggle == false) return message.channel.send("The channel has been already disable before.");
        db.set(`moderation.${message.guild.id}.modlog.toggle`, false);
        db.delete(`moderation.${message.guild.id}.modlog.channel`);
        return message.channel.send('The audit has been disabled.');     
    }
  }
}