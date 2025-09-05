import { Wrapper } from '@/components/Wrapper';
import styles from './HomePage.module.scss';

import { CountryCard } from '@/components/CountryCard';
import { Controls } from '@/components/Controls';

import { useFilteredCountries } from './useFilteredCountries';

interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
  /* custom hook */
  const [filteredCountries, countriesData, filterName] = useFilteredCountries();
  const { error, loadingStatus } = countriesData;

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
