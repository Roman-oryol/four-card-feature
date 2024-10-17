import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import CardList from './components/CardList/CardList';

import './global.css';
import styles from './App.module.css';

const App = () => {
  return (
    <Main className={styles.container}>
      <Intro />
      <CardList />
    </Main>
  );
};

export default App;
