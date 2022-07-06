const BaseEvent = require('../../utils/structures/BaseEvent');
const chalk = require('chalk-rainbow');


module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) 
  {    

    const log = console.log;

    client.on("message", (message) => {
      if (message.content == "tipik") {
        message.channel.send("DOINB RYZE HACK??");
      }

      if (message.content == "owo") {
        message.channel.send("drž hubu");
      }

      if (message.content == "kazma") {
        message.channel.send("drž hubu");
      }

      if (message.content == "volcanic") {
        message.channel.send("You are banned");
      }

      if (message.content == "volcanic") {
        message.channel.send("You are banned");
      }

      
    });

    ('guildCreate', guild => {
      guild.systemChannel.send(`Hello, it's me, TipusBot, thanks for inviting me!`)
    });

    
    log(chalk(`Logged in as ${client.user.tag}!`));
    log(chalk(`- Loaded ${client.commands.size} commands!`));
    log(chalk(`- Loaded ${client.events.size} events! peepoHappy`));
    client.user.setStatus('dnd');
    const activities = [
			`${client.guilds.cache.size} servers`,
			`${client.channels.cache.size} channels`,
			`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users`,
      'In Development',
		];

    


    
    let i = 0;
		setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]} | ${client.prefix}help`,{ type:'WATCHING'}), 15000);
	}

}