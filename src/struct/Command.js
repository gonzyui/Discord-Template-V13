const { Permissions } = require("discord.js");

global.Command = module.exports = class Command {
    constructor(options) {

        this.name = options.name || "";
        this.aliases = options.aliases || [];
        this.description = options.description || "";
        this.usage = options.usage || "";
        this.category = options.category || "Misc";
        this.ownerOnly = Boolean(options.ownerOnly) || false;
        this.cooldown = Number(options.cooldown) || 3000;
        this.memberPerms = new Permissions(options.memberPerms).freeze();
        this.clientPerms = new Permissions(options.clientPerms).freeze();
    }

    async exec(...args) {
        throw new Error(`${this.name} does not provide exec method !`);
    }
}