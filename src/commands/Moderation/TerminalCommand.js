const BaseCommand = require('../../utils/structures/BaseCommand');
const child = require('child_process')
module.exports = class TerminalCommand extends BaseCommand {
  constructor() {
    super('terminal', 'Moderation', []);
  }

  async run(client, message, args) {
   if(message.author.id !== "294532323360243712") return;

   const command = args.join(" ");
   if(!command) return message.channel.send("Please specify something");
   child.exec(command, (err, res) => {
     if(err) return console.log(err);
     message.channel.send(res.slice(0, 2000), {code: 'js'});
   }
   )
  }
}