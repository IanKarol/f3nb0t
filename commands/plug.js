const Discord = require('discord.js');
const config = require("../botconfig.json");

exports.run = (client, message, args) => {
  if (message.author.id !== config.ownerid) return message.channel.send("Huh.");
  const username = args.join(' ');
  if (username.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription('<:deny:434077006200700948> Name streaming status!');
    message.channel.send({ embed });
  }

  else if (username.length !== 0) {
  client.user.setPresence({ game: { name: `${username}'s stream`, url: `https://twitch.tv/${username}`, type: 1 } });
  message.channel.send(`Ok, started plugging ${username}'s stream!`);
}};

exports.conf = {
  aliases: ['p', 'stream']
}

exports.help = {
  name: "plug"
}
