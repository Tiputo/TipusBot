const BaseCommand = require('../../utils/structures/BaseCommand');
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const { search } = require('ffmpeg-static');


module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'moderation', []);
  }

  async run (client, message, args){

    const moderation = new Discord.MessageEmbed()
    .setTitle('Admin commands')
    .setThumbnail('https://cdn.discordapp.com/attachments/564345151841894412/806939771930279996/oTEyNPO.png')
    .setColor('BLUE')
    .addField('`ti!mute/ti!unmute`', 'Mute / Unmute a user (Bugged at the moment :-/ )')
    .addField('`ti!kick`', 'Kicks a user from the server')
    .addField('`ti!ban`', ' Bans a user from the server')
    .addField('`ti!clear`', 'Purges messages')
    .setTimestamp()

    
    const fun = new Discord.MessageEmbed()
    .setTitle('Fun')
    .setThumbnail('https://cdn.discordapp.com/attachments/564345151841894412/806939771930279996/oTEyNPO.png')
    .setColor('BLUE')
    .addField('`ti!meme`', 'Memes from Reddit')
    .addField('`ti!say`', 'Say command')
    .addField('`ti!avatar`', 'Generates a specific user\'s avatar')
    .addField('`ti!trivia`', 'Trivia quiz about everything')
    .addField('`ti!math`', 'Calculator')
    .addField('`ti!ascii`', 'Generates an ASCII')
    .addField('`ti!firstmessage`', 'Finds the first message of the channel')
    .addField('`ti!rps`', 'Rock, paper, scissors!')
    .setTimestamp()

    const utility = new Discord.MessageEmbed()
    .setTitle('Utility')
    .setThumbnail('https://cdn.discordapp.com/attachments/564345151841894412/806939771930279996/oTEyNPO.png')
    .setColor('BLUE')
    .addField('`ti!userinfo`', 'User informations')
    .addField('`ti!serverinfo`', 'Server informations')
    .addField('`ti!ping`', 'Pings a bot')
    .addField('`ti!poll`','Poll command for voting')
    .addField('`ti!giveaway`','Giveaway command')
    .addField('`ti!translate`','Translates the sentence into English.')
    .addField('`ti!ytt`', 'Launches YouTube Together')
    .setTimestamp()

    const search = new Discord.MessageEmbed()
    .setTitle('Search')
    .setThumbnail('https://cdn.discordapp.com/attachments/564345151841894412/806939771930279996/oTEyNPO.png')
    .setColor('BLUE')
    .addField('`ti!anime`', 'Searches anime')
    .addField('`ti!manga`', 'Searches manga')
    .addField('`ti!urban`', 'Searches the specific word from Urban Dictionary')
    .addField('`ti!weather`','Weather in the provided place')
    .addField('`ti!covid`','Covid cases overview in the provided place')

    const roleplay = new Discord.MessageEmbed()
    .setTitle('Roleplay')
    .setThumbnail('https://cdn.discordapp.com/attachments/564345151841894412/806939771930279996/oTEyNPO.png')
    .setColor('BLUE')
    .addField('`ti!hug`','Hugs the user')
    .addField('`ti!kiss`','Kisses the user')
    .addField('`ti!slap`','Slaps the user')
    .addField('`ti!baka`','Says to the user baka')
    .setTimestamp()


    const economy = new Discord.MessageEmbed()
    .setTitle(`Economy **(BETA)**`)
    .setThumbnail('https://cdn.discordapp.com/attachments/564345151841894412/806939771930279996/oTEyNPO.png')
    .setColor('BLUE')
    .addField('`ti!bal`','Checks your current balance')
    .addField('`ti!daily`','Daily coins')
    .addField('`ti!work`','Work command for gaining coins')
    .setTimestamp()

    const music = new Discord.MessageEmbed()
    .setTitle(`Music **(BETA)**`)
    .setThumbnail('https://cdn.discordapp.com/attachments/564345151841894412/806939771930279996/oTEyNPO.png')
    .setColor('BLUE')
    .addField('`ti!play`','Plays a song')
    .addField('`ti!skip`','Skips a song')
    .addField('`ti!stop`','Stops a song')
    .setTimestamp() 
 
    const pages = [
            moderation,
            fun,
            utility,
            search,
            roleplay,
            economy,
            music,

    ]

    const emojiList = ["⏪", "⏩"];
    const timeout = '120000';

    pagination(message, pages, emojiList, timeout)
    message.delete({timeout: 500});

}
}