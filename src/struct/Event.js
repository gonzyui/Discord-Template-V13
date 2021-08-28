global.Event = module.exports = class Event {
    constructor(options) {
        this.name = options.name || "";
        this.type = options.once || false;
    }
}