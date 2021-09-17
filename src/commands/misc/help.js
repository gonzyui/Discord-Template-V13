const { embed, removeDuplicates, formatPerms, formatArray } = require('../../utils/Utils');

module.exports = class Help extends Command {
    constructor() {
        super({
            name: "help",
            aliases: ["?", "commands"],
            description: "Help command",
            usage: "<command>",
            category: "Misc",
            ownerOnly: false,
            cooldown: 3000,
            memberPerms: [],
            clientPerms: [],
        });
    }
    async exec(message, args, data) {
        const cmd = this.client.commands.get(args[0]) || this.client.commands.get(this.client.aliases.get(args[0]));
        let emb;
        if (!cmd) {
            emb = embed()
                .setColor(message.member.displayHexColor)
                .setTitle('Help panel')
                .setThumbnail(message.guild.iconURL({ dynamic: true }));
            const categories = removeDuplicates(this.client.commands.map(cmd => cmd.category));
            for (const category of categories) {
                const dir = this.client.commands.filter(cmd => cmd.category === category);
                await emb.addField(`__${category}__ [${dir.size}]`, `${this.client.commands.filter(cmd => cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' ')}`);
            }
            return message.channel.send({ embeds: [emb] });
        } else {
            emb = embed()
                .setColor(message.member.displayHexColor)
                .setTitle('Help panel')
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription([
                    `**Aliases:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : `No aliases.`}`,
                    `**Description:** ${cmd.description}`,
                    `**Category:** ${cmd.category}`,
                    `**Permission:** ${cmd.memberPerms.toArray().length > 0 ? `${cmd.memberPerms.toArray().map((perm) => `\`${formatPerms(perm)}\``).join(', ')}` : `No permission required.`}`,
                    `**Cooldown:** ${cmd.cooldown / 1000} seconds`,
                    `**Usage:** \`${`${data.guild?.prefix}${cmd.name} ${cmd.usage || ''}`.trim()}\``,
                ].join('\n'));
            return message.channel.send({ embeds: [emb] });
        }
    }
}