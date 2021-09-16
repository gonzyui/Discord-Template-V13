global.Interaction = module.exports = class Interaction {
    constructor(options) {

        this.name = options.name || name;
        this.options = options.options || [];
        this.type = options.type || 'CHAT_INPUT';
        this.defaultPermissions = options.defaultPermissions;
        this.description = this.type === 'CHAT_INPUT' ? options.description || 'No description' : undefined;
    }

    async exec(...args) {
        throw new Error(`${this.name} does not provide exec method !`);
    }
}