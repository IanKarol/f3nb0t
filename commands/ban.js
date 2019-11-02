const Discord = require("discord.js");
const config = require("../botconfig.json");

exports.run = async (bot, message, args) => {
    //!ban @test get out
  
     let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!bUser) return message.channel.send("Can't find user!");
     let bReason = args.slice(1).join(" ");
     if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!");
     if(bUser.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("That person can't be kicked!");
  
     let banEmbed = new Discord.RichEmbed()
     .setTitle(`⚠ ${message.author.username}#${message.author.discriminator}'s Ban Report on ${bUser.user.username}#${bUser.user.discriminator}`)
     .setColor(config.green)
     .addField("Banned User", `${bUser.user.username}#${bUser.user.discriminator} **ID:** ${bUser.id}`)
     .addField("Banned By", `${message.author.username}#${message.author.discriminator} **ID:** ${message.author.id}`)
     .addField("Banned In", message.channel)
     .addField("Time", message.createdAt)
     .addField("Reason", bReason);
  
     let banChannel = message.guild.channels.find(`name`, "mod-log");
     if(banChannel) {
        message.guild.member(bUser).ban(bReason);
        banChannel.send(banEmbed);
        return;
     }
     if(!banChannel) {
        message.guild.member(bUser).ban(bReason);
     }
   
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "ban"
}
