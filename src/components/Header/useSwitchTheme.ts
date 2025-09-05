import { useAppDispatch } from '@/redux/redux-hook';
import {
  selectColorTheme,
  switchColorTheme,
} from '@/redux/slices/colorThemeSlice';
import type { ColorTheme } from '@/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

/* custom hook */
export const useSwitchTheme: () => [ColorTheme, () => void] = () => {
  const dispatch = useAppDispatch();

  const theme: ColorTheme = useSelector(selectColorTheme);

  function switchThemeHandler() {
    dispatch(switchColorTheme());
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, switchThemeHandler];
};
