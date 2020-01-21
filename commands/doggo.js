const Discord = require("discord.js");
const config = require("../botconfig.json");
const superagent = require("superagent");

exports.run = async (bot,message,args) => {

  let{body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor(config.green)
  .setTitle("Doggo 🐶")
  .setImage(body.url);

  message.channel.send(dogembed);

}

exports.conf = {
    aliases: ["dog"]
}

exports.help = {
  name: "doggo"
}
