const { Schema, model } = require('mongoose');

module.exports = model('Guilds', new Schema({
    guildID: { type: String },
    prefix: { type: String, default: '!' },
    language: { type: String, default: 'en' },
    welcomeChannel: { type: String, default: '874220241880764506' },
}))