module.exports = class Ping extends Command {
    constructor() {
        super({
            name: "ping",
            aliases: ["pong"],
            description: "Ping command",
            usage: "",
            category: "Misc",
            ownerOnly: false,
            cooldown: 3000,
            memberPerms: [],
            clientPerms: [],
        });
    }
    async exec(message, args) {
        await message.channel.sendTyping();
        return message.reply(`My latency: ${Date.now() - message.createdTimestamp}\nAPI Latency: ${this.client.ws.ping}`)
    }
}