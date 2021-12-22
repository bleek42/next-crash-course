import ArticleItem from './ArticleItem';
import styles from '../styles/Articles.module.css';

const Articles = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
