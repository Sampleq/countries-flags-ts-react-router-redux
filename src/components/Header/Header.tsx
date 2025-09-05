import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrapper';
import styles from './Header.module.scss';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { useAppDispatch } from '@/redux/redux-hook';
import { clearAllFilters } from '@/redux/slices/filtersSlice';
import { useSwitchTheme } from './useSwitchTheme';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const dispatch = useAppDispatch();

  function clearAllFiltresHandler() {
    dispatch(clearAllFilters());
  }

  /* custom hook */
  const [theme, switchThemeHandler] = useSwitchTheme();

  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <h2>
            <Link to={'/'} onClick={clearAllFiltresHandler}>
              Where is the world?
            </Link>
          </h2>

          <div className={styles.modeSwitcher} onClick={switchThemeHandler}>
            {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}{' '}
            <span>{theme} Theme</span>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
