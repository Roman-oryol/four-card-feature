import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
  );
};

export default Intro;
