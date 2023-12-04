const NEWS_API_KEY = '7a1f1381cd634e40a1670fabf8c5ef96';
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

export const getNews = async () => {
  try {
    const response = await fetch(`${NEWS_API_URL}?apiKey=${NEWS_API_KEY}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news', error);
    return [];
  }
};