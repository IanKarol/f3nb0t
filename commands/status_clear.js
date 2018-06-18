const Discord = require('discord.js');
const config = require("../botconfig.json");


exports.run = (client, message) => {

  if (message.author.id !== config.ownerID) return;
  if(args[0] !== "clear") return;

  client.user.setActivity('');

  message.channel.send("Ok, status cleared")

};

exports.conf = {
  aliases: ['s']
}

exports.help = {
  name: "status"
}
