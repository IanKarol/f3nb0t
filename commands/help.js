const Discord = require("discord.js");
const config = require("../botconfig.json");

exports.run = async (client, message, args) => {

    let aliasi = args[0] === "aliases";
    let kodblok = args[0] === "codeblock";
    let pomoc = args[0] === "help";
    let informacije = args[0] === "info";
    let kik = args[0] === "kick";
    let ping = args[0] === "ping";
    let klir = args[0] === "clear";
    let pluganje = args[0] === "plug";
    let setajstatus = args[0] === "status";
    let brisistatus = args[0] === "statusclear";
    let gledajvrijeme = args[0] === "weather";

    if (aliasi) {
        let aliasEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!aliases` command just execute it and it will show all aliases for every bot command");

        message.channel.send(aliasEmbed);
        return;
    }

    if (kodblok) {
        let kodblokEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!codeblock` command you need execute it like `f!codeblock {code}`");

        message.channel.send(kodblokEmbed);
        return;
    }

    if (pomoc) {
        let pomocEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!help` command you can execute it without other things or execute `f!help {command_name}` to see about and info about specified command");

        message.channel.send(pomocEmbed);
        return;  
    }

    if (informacije) {
        let informacijeEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!info` command and get info about yourself just execute it but if you want get info from other people you need execute it like `f!info {user / userID}`");

        message.channel.send(informacijeEmbed);
        return;
    }
    
     if (kik) {
        let kikEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!kick` command you need specify user to kick and reason, without any of this arguments command will not work, and then use command like `f!kick {user / userID} {reason}`");

        message.channel.send(kikEmbed);
        return;
    }

    if (ping) {
        let pingEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!ping` command just execute it and it will show both of your latencys");

        message.channel.send(pingEmbed);
        return;
    }

    if (klir) {
        let klirEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!clear` command you need specify how many message you need to delete and then use command like `f!clear {num of msgs to del}`");

        message.channel.send(klirEmbed);
        return;
    }

    if (pluganje) {
        let pluganjeEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!plug` command you need specify Twitch stream username");

        message.channel.send(pluganjeEmbed);
        return;
    }
    
    if (setajstatus) {
        let setajstatusEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!status` command you need specify status and execute it like `f!status {online/invisible/dnd/idle}`");

        message.channel.send(setajstatusEmbed);
        return;
    }

    if (brisistatus) {
        let brisistatusEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!statusclear` command just execute it and command will reset bot's playing status");

        message.channel.send(brisistatusEmbed);
        return;
    }
    
    if (gledajvrijeme) {
        let gledajvrijemeEmbed = new Discord.RichEmbed()
        .setColor(config.green)
        .setDescription("To use `f!weather` command you need specify a town and then it need look like `f!weather {town}`");

        message.channel.send(gledajvrijemeEmbed);
        return;
    }

    let helpEmbed = new Discord.RichEmbed()
    .setAuthor("f3nb0t", client.user.displayAvatarURL)
    .setDescription("**Use** `f!help {command_name}` **for usage of specified command**")
    .setColor(config.green)
    .addField("Regular Commands", "f!aliases - showing aliases for all bot commands\nf!codeblock - putting your code in JS codeblock\nf!help - showing help menu\nf!info - small info about pinged user\nf!ping - showing you internet latency\nf!weather - showing weather about given town")
    .addField("Moderator Commands", "f!clear - clearing specified number of messages\nf!kick - kicking user from the server")
    .addField("Bot Owner Commands", "f!plug - plugging specified **[twitct.tv](https://www.twitch.tv)** stream\nf!status - changing bot status\nf!statusclear - clearing bot status");

    message.channel.send(helpEmbed);

}

exports.conf = {
    aliases: ["h", "halp"]
}

exports.help = {
    name: "help"
}
