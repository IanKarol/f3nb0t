const Discord = require("discord.js");
const config = require("../botconfig.json");

exports.run = async (bot, message, args) => {

let nickname = args.join(' ');
let botenzi = message.guild.members.get("358644048568909843");

if(nickname.length > 32) return message.channel.send(":no_entry_sign: nickname need be less or equal to 32 characters!");

if(nickname) {
botenzi.setNickname(nickname);
await message.channel.send({
    embed: new Discord.RichEmbed()
        .setColor(config.green)
        .setTitle(`Changed Bot Server Nickname to ${nickname}`)
})}

if(!nickname || args[0] === "-reset") {
botenzi.setNickname(bot.user.username);
await message.channel.send({
    embed: new Discord.RichEmbed()
        .setColor(config.green)
        .setTitle(`Changed bot server nickname to default`)
})}

}

exports.conf = {
    aliases: ["nick"]
  }

exports.help = {
    name: "nickname"
}
