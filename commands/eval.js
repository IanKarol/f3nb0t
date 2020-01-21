const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {
  if (!["274904618474012674"].includes(message.author.id)) return;
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/'/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
  
  console.log(`\n${message.author.username}#${message.author.discriminator} used eval command on ${message.guild.name}`)
    let argresult = args.join(' ');
    if (!["274904618474012674"].includes(message.author.id)) {
           // Check if user have Permissions to use the command
          //message.channel.send('You Don\'t Have Permissions To Use This Command!'); // Send Message to the channel if they dont have permissions
          return; // Returns the code so the rest doesn't run
        }
        if (!argresult) {
          return message.channel.send("Please Specify a Code To Run!");
        }
  
        try {
  
          var evaled = eval(argresult);
  
          if (typeof evaled !== "string")
         evaled = require("util").inspect(evaled);
         if (evaled.includes(bot.token)) {
            console.log(`\n${message.author.username}#${message.author.discriminator} Try To Get The Bot Token On ${message.guild.name} (ServerID: ${message.guild.id}).\n`)
            return message.channel.send("", {
             embed: {
                color: 0xFF5733,
                title: ':exclamation::exclamation: No :exclamation::exclamation:',
                description: `No Token For You!`
             }
            });
          }
  
          let embed = new Discord.RichEmbed()
          .addField(`${bot.user.username} - JavaScript Eval Success:`, `** **`)
          .addField("<:GDownload:459739446800023554> **INPUT**", "```" + args.join(" ") + "```")
          .addField("<:GUpload:459739542908305409> **OUTPUT**", "```" + clean(evaled) + "```")
          .setColor(0xFF5733)
          .setFooter(message.createdAt, message.author.avatarURL)
          message.channel.send({embed})
  
        } catch (err){
  
          message.channel.send(new Discord.RichEmbed()
          .addField(`${bot.user.username} - JavaScript Eval Error:`, "There Was a Problem With The Code That You Are Trying To Run!")
          .addField("<:GBlocked:459455042249031690> ERROR", "```" + clean(err) + "```")
          .setColor(0xFF5733)
          .setFooter(message.createdAt, message.author.avatarURL))
          
              .catch( error => message.channel.send(`**ERROR:** ${error.message}`))
        }

}

exports.conf = {
  aliases: []
}

exports.help = {
    name: "eval"
}
