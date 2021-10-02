global.Interaction = module.exports = class Interaction {
    constructor(options) {

        this.name = options.name || name;
        this.type = options.type || 1;
        this.description = this.type === 1 ? options.description || 'No description provided' : undefined;
        this.options = options.options || [];
        this.defaultPermission = options.defaultPermission;
    }

    async exec(...args) {
        throw new Error(`${this.name} does not provide exec method !`);
    }
}
