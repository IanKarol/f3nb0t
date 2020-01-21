const Discord = require("discord.js");
const ms = require('ms');

exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }

  let ldEmbed = new Discord.RichEmbed()
  .setTitle(`⚠ ${message.author.username}#${message.author.discriminator}'s Lockdown Report on <#${message.channel.id}>`)
  .setColor(config.green)
  .addField("Locked By", `${message.author.username}#${message.author.discriminator} **ID:** ${message.author.id}`)
  .addField("Locked In", message.channel)
  .addField("Lockdown Time", `${ms(ms(time), { long:true })}`, true)

  let ldChannel = message.guild.channels.find(`name`, "mod-log");
  if(!ldChannel) return message.channel.send("Couldn't find modlog channel.");

  ldChannel.send(ldEmbed);

};

exports.conf = {
  aliases: ["ld", "lock"]
}

exports.help = {
  name: 'lockdown',
};
