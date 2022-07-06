// UDELAT TO HEZKY POTREBA JESTE DODELAT.

const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js");
let questions =  [
  {
    title: "Who is the rank 1 osu player?",
    options: ["Whitecat", "-Sath", "Rafis", "chocomint"],
    correct: 1,
  },
  {
    title: "Who created osu?",
    options: ["pepi", "peppy", "pepsi", "tipik"],
    correct: 2,
  },

  {
    title: "What year did the Titanic movie come out?",
    options: ["1998", "1999", "1997", "1996"],
    correct: 3,
  },
  {
    title: "Who played Neo in The Matrix?",
    options: ["Ryan Reynold", "Tom Cruise", "Johny Depp", "Keanu Reeves"],
    correct: 4,
  },

  {
    title: "What is the primary ingredient in guacamole?",
    options: ["Tomato", "Guacamole", "Cucumbers", "Lemon"],
    correct: 2,
  },
  
]; [
  {
    title: "Who is the rank 1 osu player?",
    options: ["Whitecat", "-Sath", "Rafis", "chocomint"],
    correct: 1,
  },
  {
    title: "Who created osu?",
    options: ["pepi", "peppy", "pepsi", "tipik"],
    correct: 2,
  },

  {
    title: "What year did the Titanic movie come out?",
    options: ["1998", "1999", "1997", "1996"],
    correct: 3,
  },
  {
    title: "Who played Neo in The Matrix?",
    options: ["Ryan Reynold", "Tom Cruise", "Johny Depp", "Keanu Reeves"],
    correct: 4,
  },

  {
    title: "What is the primary ingredient in guacamole?",
    options: ["Tomato", "Guacamole", "Cucumbers", "Lemon"],
    correct: 2,
  },
  
];

module.exports = class TriviaCommand extends BaseCommand {
  constructor() {
    super('trivia', 'Moderation', []);
  }

  async run(client, message, args) {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Reply to this message with the correct question number! You have 15 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {  
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
    }
  }
};