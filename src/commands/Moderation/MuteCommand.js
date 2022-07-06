//UPRAVIT!!!!!

const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'Moderation', []);
  }

  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have premission to mute!");
       
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!user) message.channel.send("I was unable to find this member.");

    if(user.id === message.author.id) return message.channel.send("You can't mute yourself.");

    let role = message.guild.roles.cache.find(x => x.name === "Muted");
    if(!role) await message.guild.roles.create({
      data: {
        name: 'Muted',
        reason: 'Role is needed'
   
      }
      
    }).catch(err => console.log(err));


    if(!role) return message.channel.send("I can't find this role.");
    

    let reason = args.slice(1).join(" ");
    if(reason === null) reason = "No reason given."

    user.roles.add(role);

    await message.channel.send(`${user} Has been muted for: ${reason}`)

    user.send(`You have been muted from ${message.guild.name} for: ${reason}`);
}
}