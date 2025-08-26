import type { DetailedCountry } from '@/types';
import styles from './CountryInfo.module.scss';

interface CountryInfoProps {
  country: DetailedCountry;
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
  return (
    <section className={styles.countryInfo}>
      <img src={country.flags.png} alt={country.flags.alt} />

      <div>
        <h1>{country.name.common}</h1>

        <div className={styles.listGroup}>
          <ul>
            <li>
              <b>Native Name:</b> {country.name.nativeName.cat.official}
            </li>
            <li>
              <b>Population</b> {country.population}
            </li>
            <li>
              <b>Region:</b> {country.region}
            </li>
            <li>
              <b>Sub Region:</b> {country.subregion}
            </li>
            <li>
              <b>Capital:</b> {country.capital}
            </li>
          </ul>

          <ul>
            <li>
              <b>Top Level Domain:</b>{' '}
              {country.tld.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </li>
            <li>
              <b>Currency:</b>{' '}
              {Object.values(country.currencies).map((currency) => (
                <span key={currency.symbol}>{currency.name} </span>
              ))}
            </li>
            <li>
              <b>Languages:</b>{' '}
              {Object.values(country.languages).map((language) => (
                <span key={language}>{language}</span>
              ))}
            </li>
          </ul>
        </div>

        <div className={styles.meta}>
          <b>Border Countries</b>

          {!country.borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.tagGroup}>
              //! Доделать!!
              {[].map((b) => (
                <span
                  className={styles.tag}
                  key={b}
                  onClick={() => {
                    `/country/${b}`;
                    //! Доделать!!
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
