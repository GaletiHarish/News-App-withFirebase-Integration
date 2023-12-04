import { useRouter } from 'next/router';
import { getNews } from '../api';
import styles from './NewsDetail.module.css';

const NewsDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const article = getNews().find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className={styles.noArticle}>
        <h1>Article not found</h1>
        <p>The requested article could not be found.</p>
      </div>
    );
  }

  return (
    <div className={styles.articleDetail}>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <img src={article.image} alt={article.title} />
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read the full article on {article.source.name}
      </a>
    </div>
  );
};

export default NewsDetail;
