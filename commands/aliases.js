const Discord = require("discord.js");
const config = require("../botconfig.json");

exports.run = async (bot, message, args) => {

    let aliasEmbed = new Discord.RichEmbed()
    .setAuthor("f3nb0t", bot.user.displayAvatarURL)
    .setColor(config.green)
    .addField("Aliases", "f!clear > clr\nf!codeblock > cb / code\nf!help > h / halp\nf!info > i\nf!ping > latency / myping\nf!plug > p / stream\nf!statusclear > sc")
    .setFooter("Case sensitive");

    message.channel.send(aliasEmbed);

}

exports.conf = {
    aliases: ["alias"]
}

exports.help = {
    name: "aliases"
}
