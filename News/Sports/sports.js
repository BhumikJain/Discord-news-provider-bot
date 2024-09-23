const axios = require('axios');
const { CHANNELS, NEWS_API_KEY } = require('../../config');

const category = 'sports';

async function fetchSportsNews(channel) {
    const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=hi&country=in&max=10&apikey=${NEWS_API_KEY}`);
    const articles = response.data.articles;

    if (!articles.length) return ['No sports news available today.'];

    for (const article of articles) {
        await channel.send(`**${article.title}**\n${article.url}\n`);
        // Wait for 2 seconds before sending the next article
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

module.exports = { fetchSportsNews };
