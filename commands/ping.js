const Discord = require('discord.js');

module.exports = {

  run: async (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(`🏓 ${Math.round(client.ping)}ms`)
        .setColor(message.member? message.member.displayColor : global.CLIENT_DEFAULT_COLOR);

        message.channel.send(embed);
  },

  conf: {},

  get help () {
    return {
      name: "ping",
      category: "fun",
      description: "Mostra a latência do Bot",
      usage: "!ping",
      acessablebly: "Members",
    };
  }
};