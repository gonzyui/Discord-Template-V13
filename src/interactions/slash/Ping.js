module.exports = class SlashPing extends Interaction {
    constructor() {
        super({
            name: "ping",
            description: "Ping command",
        });
    }
    async exec(interaction) {
        interaction.reply({ ephemeral: true, content: [
            `:heart: My latency - **${Math.round(interaction.createdTimestamp - Date.now())}**ms`,
            `:computer: Discord latency - **${Math.round(this.client.ws.ping)}**ms`,
            `:computer: Database latency - **${Math.round(await this.client.databasePing())}**ms`,
        ].join('\n')});
    }
}