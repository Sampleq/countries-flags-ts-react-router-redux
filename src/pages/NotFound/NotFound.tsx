import styles from './NotFound.module.scss';

interface NotFoundProps {}

export const NotFound = ({}: NotFoundProps) => {
  return <div className={styles.notFound}>NotFound Component</div>;
};
