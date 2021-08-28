const { Collection } = require("discord.js");

module.exports = class messageCreate extends Event {
    constructor() {
        super({
            name: "messageCreate",
            once: false,
        });
    }
    async exec(message) {
        if (message.author.bot || !message.content.toLowerCase().startsWith(this.client.prefix) || !message.guild) return;
        const args = message.content.slice(this.client.prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        const cmd = this.client.commands.get(cmdName) || this.client.commands.get(this.client.aliases.get(cmdName));
        if (cmd) {
            if (cmd.ownerOnly && !this.client.owners.includes(message.author.id)) {
                return message.reply(`> This command is only for my master !`);
            }
            const clientCheckPerms = cmd.clientPerms;
            if (clientCheckPerms) {
                const miss = message.channel.permissionsFor(message.guild.me).missing(clientCheckPerms);
                if (miss.length) return message.reply(`> I'm missing: ${miss.join(', ')}`);
            }

            const memberCheckPerms = cmd.memberPerms;
            if (memberCheckPerms) {
                const miss = message.channel.permissionsFor(message.member).missing(memberCheckPerms);
                if (miss.length) return message.reply(`> You are missing: ${miss.join(', ')}`);
            }

            if (!this.client.cooldowns.has(cmd.name)) {
                this.client.cooldowns.set(cmd.name, new Collection());
            }

            const now = Date.now();
            const timestamp = this.client.cooldowns.get(cmd.name);
            const cdAmount = cmd.cooldown;
            if (timestamp.has(message.author.id)) {
                const expirationTime = timestamp.get(message.author.id) + cdAmount;
                if (now < expirationTime) {
                    const timeLeft = (expirationTime - now) / 1000;
                    return message.reply(`> You need to wait ${timeLeft.toFixed(1)} more seconds!`);
                }
            }
            timestamp.set(message.author.id, now);
            setTimeout(() => timestamp.delete(message.author.id), cdAmount);
            try {
                cmd.exec(message, args);
            } catch (err) {
                this.client.logger.error(`An error occured: ${err.message}`, { tag: 'Message' });
                return message.reply(`> Sorry but an error occured.`);
            }
        }

    }
}