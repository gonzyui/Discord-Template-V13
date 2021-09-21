const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');

module.exports = class GuildMemberAdd extends Event {
    constructor() {
        super({
            name: "guildMemberAdd",
            once: false,
        });
    }
    async exec(member) {
        const data = {};
        data.guild = await this.client.findGuild({ guildID: member.guild.id });
        const canvas = Canvas.createCanvas(1024, 500);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./assets/welcome.jpg');
        const channel = this.client.channels.cache.get(data.guild?.welcomeChannel);

        ctx.drawImage(background, 0, 0, 1024, 500);
        ctx.beginPath();
        ctx.arc(512, 166, 128, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = '42px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(member.user.tag.toUpperCase(), 512, 390);
        ctx.beginPath();
        ctx.arc(512, 166, 119, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 1024 }));
        ctx.drawImage(avatar, 393, 47, 238, 238);
        let attach = new MessageAttachment(canvas.toBuffer(), "welcome.png");
        return channel.send({ content: `Welcome ${member} !`, files: [attach] });
    }
}