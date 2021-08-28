const { MessageEmbed } = require('discord.js');
const { inspect } = require('util');

module.exports = class Eval extends Command {
    constructor() {
        super({
            name: "eval",
            aliases: ["e"],
            description: "Eval command",
            usage: "<code>",
            category: "Owner",
            ownerOnly: true,
            cooldown: 3000,
            memberPerms: [],
            clientPerms: [],
        });
    }
    async exec(message, args) {
        const evaled = args.join(' ');
        try {
            if (evaled) {
                const evaluated = await eval(evaled, { depth: 0 });

                const msg = await message.reply("> Evaluating..");
                const embed = new MessageEmbed()
                .setColor('2f3136')
                .addField('Input:\n', '```js\n' + `${evaled.substring(0, 1010)}` + '```', false)
                .addField('Output:\n', '```js\n' + `${inspect(evaluated, { depth: 0}).substring(0, 1010)}` + '```', false);
                return msg.edit({ content: null, embeds: [embed] });
            } else {
                return message.reply("You need to specify some code!");
            }
        } catch (err) {
            return message.reply(`An error occured: ${err.message}`);
        }
    }
}