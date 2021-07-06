const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

try{

   var text = "**Frog.** \n\n **__commands__** \n >hallo - Zegt hallo terug. \n >botinfo - Info over de bot.";

   message.author.send(text);

   message.reply("Alle commands kan je vinden in je dm.")

}catch(error){
    message.reply("Er is iets fout gelopen.");
}

}

module.exports.help = {
    name: "help",
    description: "",
    category: ""
}