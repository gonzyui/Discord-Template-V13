module.exports = class interactionCreate extends Event {
    constructor() {
        super({
            name: "interactionCreate",
            once: false,
        });
    }
    async exec(interaction) {
        const data = {};
        data.guild = await this.client.findGuild({ guildID: interaction.guildId });
        if (interaction.isCommand()) return this.client.emit('slashCommands', interaction, data);
    }
}