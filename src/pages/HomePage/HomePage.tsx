import { Wrapper } from '@/components/Wrapper';
import styles from './HomePage.module.scss';
import { useSelector } from 'react-redux';
import { selectAllCountries } from '@/redux/slices/countriesSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/redux-hook';
import { getAllCountries } from '@/redux/asyncThunks';
import { ALL_COUNTRIES } from '@/api_config';
import { CountryCard } from '@/components/CountryCard';
import { Controls } from '@/components/Controls';
import {
  selectFilterName,
  selectFilterRegion,
} from '@/redux/slices/filtersSlice';
import { filterCountries } from '@/utils/filterCountries';

interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
  const dispatch = useAppDispatch();

  const countriesData = useSelector(selectAllCountries);
  // console.log(countriesData);
  const { error, allCountries, loadingStatus } = countriesData;

  const filterName = useSelector(selectFilterName);
  const filterRegion = useSelector(selectFilterRegion);

  const filteredCountries = filterCountries(
    allCountries,
    filterName,
    filterRegion
  );

  useEffect(() => {
    if (!allCountries.length) {
      dispatch(getAllCountries(ALL_COUNTRIES));
    }
  }, []); //! проверить загружаются ли страны если перейти на сайт сразу на детальную страницу а потом вернутся Link на главную

  return (
    <div className={styles.homePage}>
      <Wrapper>
        <Controls />

        {error && <h2>Can't load Countries</h2>}
        {loadingStatus === 'loading' ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2>Total Countries: {filteredCountries.length}</h2>

            <section className={styles.countriesList}>
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  searchPrompt={filterName}
                />
              ))}
            </section>
          </>
        )}
      </Wrapper>
    </div>
  );
};
