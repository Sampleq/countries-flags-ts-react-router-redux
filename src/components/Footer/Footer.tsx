import styles from './Footer.module.scss';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} by{' '}
        <a href='https://github.com/Sampleq' target='_blank'>
          <i>Sampleq</i>
        </a>{' '}
        Igor M.{' '}
      </p>
      <p>
        Source code:{' '}
        <a
          href='https://github.com/Sampleq/countries-flags-ts-react-router-redux'
          target='_blank'
        >
          GitHub Repo
        </a>
      </p>
    </footer>
  );
};
