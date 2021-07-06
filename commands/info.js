const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Info:')
            .setColor("#7bb54e")
            .addField("Bot naam:", bot.user.username)
            .setTimestamp()
            .setFooter('Created by Tweeli.#5298');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}