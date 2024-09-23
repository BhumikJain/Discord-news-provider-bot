const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');
const { fetchBusinessNews } = require('./News/Business/business');
const { fetchEntertainmentNews } = require('./News/Entertainment/entertainment');
const { fetchGeneralNews } = require('./News/General/general');
const { fetchHealthNews } = require('./News/Health/health');
const { fetchNationNews } = require('./News/Nation/nation');
const { fetchScienceNews } = require('./News/Science/science');
const { fetchSportsNews } = require('./News/Sports/sports');
const { fetchTechnologyNews } = require('./News/Technology/technology');
const { fetchWorldNews } = require('./News/World/world');
const { CHANNELS, DISCORD_BOT_TOKEN } = require('./config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    // console.log(`Logged in as ${client.user.tag}!`);

    // Send initial message to all channels
    const channelIds = Object.values(CHANNELS);

    channelIds.forEach(channelId => {
        const channel = client.channels.cache.get(channelId);
        if (channel) {
            channel.send('Hello World! I am a news provider bot made by CHEEMDA MAN! 🎉')
                .catch(error => console.error(`Error sending message to channel ${channelId}:`, error));
        } else {
            console.error(`Channel with ID ${channelId} not found!`);
        }
    });
    // Schedule daily news
    cron.schedule('0 8,19 * * *', async () => {
        const businessChannel = client.channels.cache.get(CHANNELS.business);
        const entertainmentChannel = client.channels.cache.get(CHANNELS.entertainment);
        const generalChannel = client.channels.cache.get(CHANNELS.general);
        const healthChannel = client.channels.cache.get(CHANNELS.health);
        const nationChannel = client.channels.cache.get(CHANNELS.nation);
        const scienceChannel = client.channels.cache.get(CHANNELS.science);
        const sportsChannel = client.channels.cache.get(CHANNELS.sports);
        const techChannel = client.channels.cache.get(CHANNELS.tech);
        const worldChannel = client.channels.cache.get(CHANNELS.world);



        // Check if the business channel exists and fetch news
        if (businessChannel) {
            try {
                await fetchBusinessNews(businessChannel);
            } catch (error) {
                console.error('Error fetching business news:', error);
            }
        } else {
            console.error('Business channel not found!');
        }

        // Check if the entertainment channel exists and fetch news
        if (entertainmentChannel) {
            try {
                await fetchEntertainmentNews(entertainmentChannel);
            } catch (error) {
                console.error('Error fetching entertainment news:', error);
            }
        } else {
            console.error('Entertainment channel not found!');
        }
        // Check if the general channel exists and fetch news
        if (generalChannel) {
            try {
                await fetchGeneralNews(generalChannel);
            } catch (error) {
                console.error('Error fetching general news:', error);
            }
        } else {
            console.error('General channel not found!');
        }
        // Check if the Health channel exists and fetch news
        if (healthChannel) {
            try {
                await fetchHealthNews(healthChannel);
            } catch (error) {
                console.error('Error fetching Health news:', error);
            }
        } else {
            console.error('Health channel not found!');
        }
        // Check if the nation channel exists and fetch news
        if (nationChannel) {
            try {
                await fetchNationNews(nationChannel);
            } catch (error) {
                console.error('Error fetching nation news:', error);
            }
        } else {
            console.error('Nation channel not found!');
        }
        // Check if the science channel exists and fetch news
        if (scienceChannel) {
            try {
                await fetchScienceNews(scienceChannel);
            } catch (error) {
                console.error('Error fetching science news:', error);
            }
        } else {
            console.error('Science channel not found!');
        }

        // Check if the sports channel exists and fetch news
        if (sportsChannel) {
            try {
                await fetchSportsNews(sportsChannel);
            } catch (error) {
                console.error('Error fetching sports news:', error);
            }
        } else {
            console.error('Sports channel not found!');
        }

        // Check if the tech channel exists and fetch news
        if (techChannel) {
            try {
                await fetchTechnologyNews(techChannel); // Call the function directly
            } catch (error) {
                console.error('Error fetching tech news:', error);
            }
        } else {
            console.error('Tech channel not found!');
        }

        // Check if the world channel exists and fetch news
        if (worldChannel) {
            try {
                await fetchWorldNews(worldChannel); // Call the function directly
            } catch (error) {
                console.error('Error fetching world news:', error);
            }
        } else {
            console.error('World channel not found!');
        }
 
    });
});

client.login(DISCORD_BOT_TOKEN);