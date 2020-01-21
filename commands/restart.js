const Discord = require("discord.js");
const config = require("../botconfig.json");
const tokenfile = require("../Procfile");

exports.run = async (bot, message, args) => {

  if (!["274904618474012674"].includes(message.author.id)) return;

  let restartEmbed = new Discord.RichEmbed();
  restartEmbed.setTitle(`${bot.user.username} | Restarting...`)
  restartEmbed.setColor(config.green);

  message.channel.send(restartEmbed);

  bot.destroy();
  await bot.login(tokenfile);

}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "restart"
}
