const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const discord = require('discord.js')
module.exports = class RpsCommand extends BaseCommand {
  constructor() {
    super('rps', 'Fun', []);
  }

  async run(client, message, args) {

    const noTime = new Discord.MessageEmbed()
    .setColor('#000000')
    .setAuthor('Process has been cancelled since you did not respond in time!')
    .setTimestamp()

    const Win = new Discord.MessageEmbed()
    .setColor('#00FF00')
    .setAuthor('You won!')
    .setTimestamp()

    const Tie = new Discord.MessageEmbed()
    .setColor('#FFFF00')
    .setAuthor('It\'s a tie!')
    .setTimestamp()

    const Loss = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor('You lost!')
    .setTimestamp()
    
    let embed = new discord.MessageEmbed()
		.setTitle("Rock, Paper, Scissors!")
		.setDescription("React to play!")
		.setTimestamp()
    
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULT")
        		.addField("Your choice", `${reaction.emoji.name}`)
        		.addField("My choice", `${me}`)

			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {

                    message.channel.send(Loss);
            } else if (me === reaction.emoji.name) 
            {
                return message.channel.send(Tie);
            } else {
                return message.channel.send(Win);
            }
        })
        .catch(collected => {
                message.channel.send(noTime);
            })
}
}