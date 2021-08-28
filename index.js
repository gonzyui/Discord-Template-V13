require('dotenv').config();

// Import our client structure
const Bot = require('./src/struct/Bot');
const client = new Bot();

// And start the bot
client.start(process.env.TOKEN)