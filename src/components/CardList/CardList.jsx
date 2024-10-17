import Card from '../Card/Card';

import features from '../../mocks/features';

import styles from './CardList.module.css';

const CardList = () => {
  return (
    <ul className={styles.cardList}>
      {features?.map(({id, title, description}) => (
        <li key={id}>
          <Card title={title} description={description} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
