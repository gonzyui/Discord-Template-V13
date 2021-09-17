module.exports = class SlashCommands extends Event {
    constructor() {
        super({
            name: "slashCommands",
            once: false,
        });
    }
    async exec(interaction, data) {
        const cmd = this.client.interactions.get(interaction.commandName);
        try {
            await cmd.exec(interaction, data);
        } catch (err) {
            interaction.reply({ ephemeral: true, content: 'I got an error!'});
            return this.client.logger.error(`An error occured: ${err.message}`, { tag: 'Interaction' });
        }
    }
}