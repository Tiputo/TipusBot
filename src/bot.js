require('dotenv').config();
const { Client } = require('discord.js');
const Discord = require('discord.js');

const {MessageButton} = require('discord-buttons');
const { registerCommands, registerEvents } = require('./utils/registry');

const client = new Client();
require('discord-buttons')(client);
client.on('clickMenu', menu => {
  Nuggies.dropclick(client, menu);
})
// ======================================================================================================
// --- MONGODB DATABASE ---
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tipik:yHphyhtU1aQjlOby@tipusbot.vkyga.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("%cSuccessfully connected to mongodb!", "color:green"))



// ECONOMY

const schema = require('./utils/models/schema');

client.bal = (id) => new Promise(async ful => {
  const data = await schema.findOne({id});
   if(!data) return ful(0);
   ful(data.coins);
   data.save();

})

client.add = (id, coins) => {
schema.findOne({ id }, async(err,data)=> {
  if(err) throw err;
  if(data){
    data.coins += coins;
  } else{
    data = new schema({ id, coins})
  }
  data.save();
})
}

client.remove = (id, coins) => {
  schema.findOne({ id }, async(err,data)=> {
    if(err) throw err;
    if(data){
      data.coins -= coins;
    } else{
      data = new schema({ id, coins: -coins })
    }
    data.save();
  })
  }
  

// ======================================================================================================


// --- MUSIC COMMANDS --- 
const distube = require('distube');
client.distube = new distube(client, {searchSongs: false, emitNewSongOnly: true});
client.distube


.on('playSong', (message, queue, song) => message.channel.send(
  `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`,
))
.on('addSong', (message, queue, song) => message.channel.send(
  `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
))
.on('error', (message, e) => {
  message.channel.send(`An error encountered: ${e}`)
})

process.setMaxListeners(0);

// ======================================================================================================
  
(async () => {
  client.commands = new Map();
  client.events = new Map();
  
  client.prefix = process.env.DISCORD_BOT_PREFIX;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();

