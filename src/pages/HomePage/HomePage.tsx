import { Wrapper } from '@/components/Wrapper';
import styles from './HomePage.module.scss';

interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
  return (
    <div className={styles.homePage}>
      <Wrapper>HomePage Component</Wrapper>
    </div>
  );
};
