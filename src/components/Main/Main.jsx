import styles from './Main.module.css';

const Main = ({className = '', children}) => {
  return <main className={className}>{children}</main>;
};

export default Main;
