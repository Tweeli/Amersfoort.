const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    var idee = args.join(" ");
 
    if (!idee) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");
 
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Nieuw Idee")
        .setColor("#00FF00")
        .addField("Idee: ", idee)
        .addField("Ingezonden door: ", message.author)
        .setFooter('Created by Tweeli.#5298');

    var ideeChannel = message.guild.channels.find(`name`, "chatten");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
 
 
}
 
module.exports.help = {
    name: "idee",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
}