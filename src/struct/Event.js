global.Event = module.exports = class Event {
    constructor(options) {

        this.name = options.name || "";
        this.type = options.once || false;
    }

    async exec(...args) {
        throw new Error(`${this.name} does not provide exec method !`);
    }
}