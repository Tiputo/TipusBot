const BaseCommand = require('../../utils/structures/BaseCommand');
const prefixSchema = require('../../utils/models/prefix');
const prefix = require('../../events/message/message').prefix

module.exports = class PrefixResetCommand extends BaseCommand {
  constructor() {
    super('prefix-reset', 'CustomPrefix', []);
  }

  async run(client, message) {
 
          await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
          message.channel.send(`The prefix has been reset to ${prefix}`)
}
}