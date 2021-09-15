module.exports = class guildCreate extends Event {
    constructor() {
        super({
            name: "guildCreate",
            once: false,
        });
    }
    async exec(guild) {
        await this.client.loadInteractions(guild.id);
    }
}