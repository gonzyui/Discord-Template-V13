require('dotenv').config();

/* Import our client structure */
const { Bot } = require('./src/struct/Bot');
/* Call our start function to load the bot instance */
(async () => await new Bot().start(process.env.TOKEN))();