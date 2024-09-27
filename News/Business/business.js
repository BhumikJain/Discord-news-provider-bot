const axios = require('axios');
const { CHANNELS, NEWS_API_KEY } = require('../../config');

const category = 'business';

async function fetchBusinessNews(channel) {
    const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=hi&country=in&max=10&apikey=${NEWS_API_KEY}`);
    const articles = response.data.articles;

    if (!articles.length) return ['No business news available today.'];

    // Send the header before the articles
    await channel.send('# TODAY\'S NEWS\n');

    for (let index = 0; index < articles.length; index++) {
        const article = articles[index];
        const title = article.title;

        await channel.send(`**${index + 1}. ${title}** **[Click here to know more](${article.url})**\n`);

        // Wait for 1 seconds before sending the next article
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

module.exports = { fetchBusinessNews };
