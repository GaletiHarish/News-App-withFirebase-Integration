import { useEffect, useState } from 'react';
import { getNews } from '../api';

const Home = () => {
  const [news, setNews] = useState([]);
  const [viewType, setViewType] = useState('list'); // 'list' or 'grid'

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getNews();
      setNews(articles);
    };

    fetchNews();
  }, []);

  const toggleView = () => {
    setViewType((prevType) => (prevType === 'list' ? 'grid' : 'list'));
  };

  return (
    <div>
      <button onClick={toggleView}>Toggle View</button>
      {viewType === 'list' ? (
        <ul>
          {news.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url}>Read More</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid">
          {news.map((article) => (
            <div key={article.id} className="grid-item">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url}>Read More</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
