const botconfig = require("../botconfig.json")

module.exports = (bot, message) => {

    if(message.author.bot) return;
    //if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
    let cmd2 = messageArray[0];
    let args = messageArray.slice(1);
  
    const command = cmd2.slice(prefix.length).toLowerCase();
  
    const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
    if (cmd) {
      message.flags = [];
      while(args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
      }
      cmd.run(bot, message, args);
    }

}
