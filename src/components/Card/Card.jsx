import styles from './Card.module.css';

const Card = ({ title, description }) => {
  const classMod = title.toLowerCase().replace(' ', '-');
  return (
    <div className={`${styles.card} ${styles[`card--${classMod}`]}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
