module.exports = class Prefix extends Command {
    constructor() {
        super({
            name: "prefix",
            aliases: ["pref"],
            description: "Prefix command",
            usage: "<prefix>",
            category: "Admin",
            ownerOnly: false,
            cooldown: 3000,
            memberPerms: ["MANAGE_GUILD"],
            clientPerms: [],
        });
    }
    async exec(message, [prefix], data) {
        const guildLang = data.guild?.language;
        const translate = require(`../../language/${guildLang}`);
        if (!prefix) return message.reply(`${translate("PREFIX", data.guild?.prefix)}`);
        if (prefix.length > 3) return message.reply(`The prefix cannot be longer than 3 characters !`);
        data.guild.prefix = prefix;
        await data.guild.save();
        return message.reply(`Changed prefix to ${prefix}`);
    }
}
