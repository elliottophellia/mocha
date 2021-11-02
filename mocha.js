const {Client, MessageEmbed} = require('discord.js-selfbot');
const cron = require('cron');
const config = require('./config/config.json');
const client = new Client({disableMentions: 'everyone'});


client.once("ready", () => {
    console.log(`Online as ${client.user.tag}`);

    let scheduledMessage = new cron.CronJob('0 */2 * * *', () => {
        // bumping every 2 hours
        const guild = client.guilds.cache.get(config.guild); // your guild id
        const channel = guild.channels.cache.get(config.channel); // your guild channel id
        channel.send(`!d bump`);
    });

    scheduledMessage.start()
});

client.login(config.token);
