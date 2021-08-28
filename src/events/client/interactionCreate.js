module.exports = class interactionCreate extends Event {
    constructor() {
        super({
            name: "interactionCreate",
            once: false,
        });
    }
    async exec(interaction) {
        if (interaction.isCommand()) {
            await this.client.application?.commands.fetch(interaction.commandId).catch(() => null);
            const cmd = this.client.interactions.get(interaction.commandName);
            try {
                await cmd.exec(interaction);
            } catch (err) {
                return this.client.logger.error(`An error occured: ${err.message}`, { tag: 'Interaction' });
            }
        }
    }
}