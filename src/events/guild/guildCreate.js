module.exports = class guildCreate extends Event {
    constructor() {
        super({
            name: "guildCreate",
            once: false,
        });
    }
    async exec(guild) {
        this.client.logger.log(`${guild.name}(${guild.id}) just added me!`, { tag: 'guildCreate' });
    }
}