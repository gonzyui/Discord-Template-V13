module.exports = class SlashPing extends Interaction {
    constructor() {
        super({
            name: "ping",
            description: "Ping command",
        });
    }
    async exec(interaction) {
        return interaction.reply({ ephemeral: true, content: `My latency: ${Date.now() - interaction.createdTimestamp}\nAPI Latency: ${this.client.ws.ping}`})
    }
}