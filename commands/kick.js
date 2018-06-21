const Discord = require("discord.js");
const config = require("../botconfig.json");

exports.run = async (bot, message, args) => {
    //!kick @daeshan askin for it
  
     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!kUser) return message.channel.send("Can't find user!");
     let kReason = args.slice(1).join(" ");
     if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");
     if(kUser.hasPermission("KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("That person can't be kicked!");
  
     let kickEmbed = new Discord.RichEmbed()
     .setTitle(`⚠ ${message.author.username}#${message.author.discriminator}'s Kick Report on ${kUser.user.username}#${kUser.user.discriminator}`)
     .setColor(config.green)
     .addField("Kicked User", `${kUser.user.username}#${kUser.user.discriminator} **ID:** ${kUser.id}`)
     .addField("Kicked By", `${message.author.username}#${message.author.discriminator} **ID:** ${message.author.id}`)
     .addField("Kicked In", message.channel)
     .addField("Tiime", message.createdAt)
     .addField("Reason", kReason);
  
     let kickChannel = message.guild.channels.find(`name`, "mod-log");
     if(kickChannel) {
        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);
        return;
     }
     if(!kickChannel) {
        message.guild.member(kUser).kick(kReason);
     }
   
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "kick"
}
