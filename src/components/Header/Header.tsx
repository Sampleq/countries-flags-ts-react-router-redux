import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrapper';
import styles from './Header.module.scss';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectColorTheme, switchColorTheme } from '@/redux/colorThemeSlice';
import { useAppDispatch } from '@/redux/redux-hook';
import type { ColorTheme } from '@/types';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const dispatch = useAppDispatch();

  const theme: ColorTheme = useSelector(selectColorTheme);

  function modeSwitcherClickHandler() {
    dispatch(switchColorTheme());
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <h2>
            <Link to={'/'}>Where is the world?</Link>
          </h2>

          <div
            className={styles.modeSwitcher}
            onClick={modeSwitcherClickHandler}
          >
            {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}{' '}
            <span>{theme} Theme</span>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
