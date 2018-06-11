const Discord = require('discord.js');


exports.run = (client, message, args) => {

    let iUser = message.guild.member(message.mentions.users.first() || message.author);
    let nickname = iUser.nickname

    if(nickname) {
      message.channel.send(`**ID:** ${iUser.id}\n**Username:** ${iUser.user.username}\n**Discriminator:** ${iUser.user.discriminator}\n\n**Nickname:** ${nickname}\n**Joined At:** ${iUser.joinedAt}\n**Creation Date:** ${iUser.user.createdAt}`);
    }

    if(!nickname) {
      message.channel.send(`**ID:** ${iUser.id}\n**Username:** ${iUser.user.username}\n**Discriminator:** ${iUser.user.discriminator}\n\n**Nickname:** *none*\n**Joined At:** ${iUser.joinedAt}\n**Creation Date:** ${iUser.user.createdAt}`);
    }

};

exports.conf = {
  aliases: ['i']
}

exports.help = {
  name: "info"
}
