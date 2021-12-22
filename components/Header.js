import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.title}>
      <h1><span>Web Dev</span> News</h1>
      <p className={styles.description}>Keeping up with the ever changing world of Web Development</p>
    </div>
  );
};

export default Header;
