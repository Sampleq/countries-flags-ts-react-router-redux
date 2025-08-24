import { Wrapper } from '@/components/Wrapper';
import styles from './HomePage.module.scss';
import { useSelector } from 'react-redux';
import { selectAllCountries } from '@/redux/slices/countriesSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/redux-hook';
import { getAllCountries } from '@/redux/asyncThunks';
import { ALL_COUNTRIES } from '@/api_config';
import { CountryCard } from '@/components/CountryCard';

interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
  const dispatch = useAppDispatch();

  const allCountries = useSelector(selectAllCountries);
  console.log(allCountries);

  useEffect(() => {
    dispatch(getAllCountries(ALL_COUNTRIES));
  }, []);

  return (
    <div className={styles.homePage}>
      <Wrapper>
        ControlsComponent
        <section className={styles.countriesList}>
          {' '}
          {allCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </section>
      </Wrapper>
    </div>
  );
};
