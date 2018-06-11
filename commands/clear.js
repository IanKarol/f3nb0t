const Discord = require("discord.js");
const fs = require("fs");
const config = require("../botconfig.json");

exports.run = async (bot, message, args) => {

  //!clear <num of messages to delete>

  message.delete();

  let amount = parseInt(args[0]);

  if(message.channel.type === "dm") return message.reply("You can't use that command in DMs!");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("oof."),
  message.channel.send("You don't have permissions to do that.").then(msg => msg.delete(5555));
  if(!amount) return message.channel.send("Usage: f!clean <number of messages to clean>");

  //while (amount) {
    //message.channel.bulkDelete(Math.min(100, amount));
    //amount -= Math.min(100, amount);
  //}

  message.channel.bulkDelete(amount).then(() => {
  message.channel.send(`Cleaned ${amount} messages.`).then(msg => msg.delete(5000));
    }); 
}

exports.conf = {
  aliases: ['clr', 'prune', 'purge', 'delete']
}

exports.help = {
  name: "clear"
}
