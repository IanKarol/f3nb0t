const config = require("../botconfig.json");
exports.run = (client, msg, args) => {
msg.delete();
let statuses = {
"online": "online",
"on": "online",
"invisible": "invisible",
"offline": "invisible",
"off": "invisible",
"invis": "invisible",
"i": "invisible",
"dnd": "dnd",
"idle": "idle",
"away": "idle"
};
if(msg.author.id !== config.ownerID) return msg.reply("You do not have bot owner permissions to use that command!").then(msg => msg.delete(2655));
if(!args[0]) return msg.channel.send("Please specify the status!");
let status = statuses[args[0].toLowerCase()]; 
if(!status) {
return msg.channel.send(`Apparently I'm an idiot because ${status} isn't a valid status. Fucking derp.`).then(msg => msg.delete(2655)); 
} 
if(status === "on") status = "online"; 
if(status === "off") status = "invisible"; 
if(status === "i") status = "invisible"; 
if(status === "offline") status = "invisible"; 
client.user.setStatus(status) 
.then(u=> { 
msg.channel.send(`Status changed to ${status}`).then(msg => msg.delete(2655));
}).catch(e=> { 
msg.channel.send(`Error while changing status to: ${status}\n\`\`\`${e}\`\`\``).then(msg => msg.delete(2655)); 
});
}; 
exports.conf = { 
aliases: ["s"]
}; 
exports.help = { 
name: 'status'
};
