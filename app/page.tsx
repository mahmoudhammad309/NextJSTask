import { Provider } from 'react-redux';
import store from '../store';
import styles from './page.module.css';

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        {/* Your page content */}
        asd
      </main>
      </Provider>
  );
}

