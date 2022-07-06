const BaseCommand = require('../../utils/structures/BaseCommand');
const disbut = require('discord-buttons');
const Discord = require('discord.js');
module.exports = class ReactiontimeCommand extends BaseCommand {
  constructor() {
    super('rt', 'Fun', []);
  }

  async run(client, message, args) {
    const reactButton = new disbut.MessageButton()
        .setStyle('green')
        .setLabel(' ')
        .setID('reaction')

        const reactButtonDisabled = new disbut.MessageButton()
        .setStyle('red')
        .setLabel(' ')
        .setID('reactiondisabled')
        .setDisabled(true)

        let now = new Date().getTime();
        let time = 0
        let setTimer

        message.channel.send('React as soon as the button is green', reactButtonDisabled).then((m) => {
            let timer = (Math.floor(Math.random() * 6) + 1) * 2000
        
            setTimeout(function(){ 
                m.edit('React as soon as the button is green', reactButton); 
                setTimer = setInterval(function(){time = time + 1}, 1)
            }, timer)
        })

        client.on('clickButton', async (button) => { 

          if (button.id == "reaction") {
              clearInterval(setTimer)
              button.message.edit(["Emoji"].info + " It took you " +time / 1000+ "s to react")
          }
      })

  }

        }

    
