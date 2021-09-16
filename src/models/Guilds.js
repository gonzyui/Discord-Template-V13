const { Schema, model } = require('mongoose');

module.exports = model('Guilds', new Schema({
    guildID: { type: String },
    prefix: { type: String, default: '!' },
}))