require('dotenv').config();

module.exports = {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    CHANNELS: {
        business: process.env.CHANNEL_BUSINESS,
        entertainment: process.env.CHANNEL_ENTERTAINMENT,
        general: process.env.CHANNEL_GENERAL,
        health: process.env.CHANNEL_HEALTH,
        nation: process.env.CHANNEL_NATION,
        science: process.env.CHANNEL_SCIENCE,
        sports: process.env.CHANNEL_SPORTS,
        tech: process.env.CHANNEL_TECHNOLOGY,
        world: process.env.CHANNEL_WORLD,
    },
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
};
