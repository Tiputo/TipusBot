const BaseCommand = require('../../utils/structures/BaseCommand');
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");
const Discord = require('discord.js');

module.exports = class InstagramCommand extends BaseCommand {
  constructor() {
    super('ig', 'Search', []);
  }

  async run(client, message, args) {
    const name = args.join(" ");

        if (!name) {
            return message.channel.send("Please, type the account")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        let res; 
        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.channel.send("Couldn't find the account")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profile information", stripIndents`**- Username:** ${account.username}
            **- Full name:** ${account.full_name}
            **- Biography:** ${account.biography.length == 0 ? "none" : account.biography}
            **- Posts:** ${account.edge_owner_to_timeline_media.count}
            **- Followers:** ${account.edge_followed_by.count}
            **- Following:** ${account.edge_follow.count}
            **- Private account:** ${account.is_private ? "Yes 🔐" : "Nope 🔓"}`);

        message.channel.send(embed);
    }
}