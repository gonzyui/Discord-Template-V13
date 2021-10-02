const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = class Avatar extends Interaction {
    constructor() {
        super({
            name: "Avatar",
            type: '2',
            description: 'Gets Avatar'
        });
    }
    async exec(interaction) {
        const row = new MessageActionRow().addComponents(new MessageButton().setStyle('LINK').setURL(interaction.options.getUser('user').displayAvatarURL({ dynamic: true, size: 4096 })).setLabel("Show"))
        interaction.reply({ content: `${interaction.options.getUser('user').displayAvatarURL({ dynamic: true, size: 4096 })}`, components: [row] });
    }
}
