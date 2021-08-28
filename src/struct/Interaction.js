global.Interaction = module.exports = class Interaction {
    constructor(options) {
        this.name = options.name || name;
        this.description = options.description || 'No description provided';
        this.options = options.options || [];
    }
}