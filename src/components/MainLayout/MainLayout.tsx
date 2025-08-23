import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {}

export const MainLayout = ({}: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Outlet />
    </div>
  );
};
