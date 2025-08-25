import { Search } from '../Search';
import styles from './Controls.module.scss';

interface ControlsProps {}

export const Controls = ({}: ControlsProps) => {
  return (
    <div className={styles.controls}>
      <Search />
    </div>
  );
};
