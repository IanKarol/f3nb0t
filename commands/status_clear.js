const Discord = require('discord.js');
const config = require("../botconfig.json");


exports.run = (client, message) => {

  if (message.author.id !== config.ownerid) return;

  client.user.setActivity('');

  message.channel.send("Ok, status cleared")

};

exports.conf = {
  aliases: ['sc']
}

exports.help = {
  name: "statusclear"
}
