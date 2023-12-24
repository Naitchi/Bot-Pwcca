const { Client } = require('discord.js');
require('dotenv').config();

const client = new Client();
const token = process.env.TOKEN;

client.once('ready', () => {
  console.log('bot Discord initialisé !');
});

client.once('ready', () => {
  setInterval(function () {
    const minutes = new Date().getMinutes();
    console.log(minutes);
    if (minutes == 14 || minutes == 44) {
      console.log('correct time');
      client.channels.cache
        .get(`1009433179268071494`)
        .send('Ranked UP dans 1min! :crown:')
        .destroy(5000);
    }
  }, 60000);
});

client.login(token);
