import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import styles from './MainLayout.module.scss';
import { Footer } from '../Footer';

interface MainLayoutProps {}

export const MainLayout = ({}: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
