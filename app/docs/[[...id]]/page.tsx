import styles from './style.module.css';

const DocsIdPage = ({ params }) => {
  console.log(params);
  return <div className={`${styles.title} ${styles.uppercase}`}>docs id </div>;
};

export default DocsIdPage;
