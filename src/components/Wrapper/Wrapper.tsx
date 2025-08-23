import type { ReactNode } from 'react';
import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
