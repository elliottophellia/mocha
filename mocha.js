const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const config = require('./config/config.json');
const cron = require('node-cron');
const figlet = require('figlet');

client.on('ready', async () => {
    console.log(figlet.textSync('Mocha', { horizontalLayout: 'full' }));
    console.log(` Logged in as ${client.user.tag} at ${new Date().toLocaleString()}`);
    console.log(` From now on, I will be bumping Disbord every 2 hours!`);
    
    //-----------------------------------------------------------------------------------------------------------------------
    cron.schedule('0 */2 * * *', () => { // if somethings goes wrong you can try using this cron : 0 0-23/2 * * *
        client.guilds.cache.get(config.bump.server).channels.cache.get(config.bump.channel).sendSlash('302050872383242240', 'bump');
        console.log(' Bumping Disbord - ' + new Date().toLocaleString() + ' - ' + client.user.tag);
    }, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    });
    //-----------------------------------------------------------------------------------------------------------------------
    // or you can comment code above and uncomment this code :
    //-----------------------------------------------------------------------------------------------------------------------
    /*
    
    setInterval(() => {
        client.guilds.cache.get(config.bump.server).channels.cache.get(config.bump.channel).sendSlash('302050872383242240', 'bump');
        console.log(' Bumping Disbord - ' + new Date().toLocaleString() + ' - ' + client.user.tag);
    }, 7200000); // time written in milisecond so 7200000 equal to 2 hours
    
    */
    //-----------------------------------------------------------------------------------------------------------------------
})

client.login(config.token);
