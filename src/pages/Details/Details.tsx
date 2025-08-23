import { Wrapper } from '@/components/Wrapper';
import styles from './Details.module.scss';

interface DetailsProps {}

export const Details = ({}: DetailsProps) => {
  return (
    <div className={styles.details}>
      <Wrapper>Details Component</Wrapper>
    </div>
  );
};
