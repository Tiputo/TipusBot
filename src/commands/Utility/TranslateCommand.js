const BaseCommand = require('../../utils/structures/BaseCommand');
const translate = require("@iamtraction/google-translate");

module.exports = class TranslateCommand extends BaseCommand {
  constructor() {
    super('translate', 'Moderation', []);
  }

  async run(client, message, args) {
    if(!args[0]) return message.channel.send('**Please, enter the sentence.**');

    translate(args.join(' '), { to: 'en' }).then(res => { 
      message.channel.send(`\`\`${res.text}\`\``); 
   }).catch(err => { 
       message.channel.send("**I had a problem with the translation.**");
       console.log(err)
  });
}
}