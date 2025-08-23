import { Wrapper } from '../Wrapper';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.header}>
      <Wrapper>Header Component</Wrapper>
    </div>
  );
};
