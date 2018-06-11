const Discord = require('discord.js');


exports.run = (client, message, args) => {

    if(message.channel.type === "dm") {

      let kod = args.join(" ");
      message.channel.send(`You executed *codeblock* command. Your code block is down here.\`\`\`js\n${kod}\n\`\`\``)

    }

    if(message.channel.type === "text") {

    let kod = args.join(" ");
    message.reply(`executed *codeblock* command. Your code block is down here.\`\`\`js\n${kod}\n\`\`\``)

}};

exports.conf = {
  aliases: ['cb', 'code']
}

exports.help = {
  name: "codeblock"
}
