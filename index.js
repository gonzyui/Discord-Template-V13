require('dotenv').config();

/* Import our client structure */
const Bot = require('./src/struct/Bot');
const client = new Bot();

/* Call our start function to load the bot instance */
(async () => await client.start(process.env.TOKEN))();