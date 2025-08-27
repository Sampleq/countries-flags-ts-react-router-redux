import type { DetailedCountry } from '@/types';
import styles from './CountryInfo.module.scss';
import { useNavigate } from 'react-router-dom';
import { LuExternalLink } from 'react-icons/lu';
import { getNeighborNameFromCode } from '@/utils/getNeighborNameFromCode';
import { useSelector } from 'react-redux';
import { selectAllCountries } from '@/redux/slices/countriesSlice';
// import { getNeighborsNamesFromCodes } from '@/utils/getNeighborsNamesFromCodes';

interface CountryInfoProps {
  country: DetailedCountry;
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
  const navigate = useNavigate();

  const allCountries = useSelector(selectAllCountries).allCountries;

  // let neighborNames: string[];
  // if (country.borders) {
  //   neighborNames = getNeighborsNamesFromCodes(allCountries, country.borders);
  // }

  return (
    <section className={styles.countryInfo}>
      {/* <img src={country.flags.png} alt={country.flags.alt} /> */}
      <img src={country.flags.svg} alt={country.flags.alt} />

      <div>
        <h1>{country.name.common}</h1>

        <div className={styles.listGroup}>
          <ul>
            <li>
              <b>Native Name:</b>{' '}
              {/* {Object.values(country.name)[1].official} */}
              {country.name.nativeName
                ? Object.values(country.name.nativeName)[0].official
                : country.name.official}
              {/* "cat" - в API для каждой страны разный ключ в nativeName */}
            </li>
            <li>
              <b>Population</b> {country.population.toLocaleString()}
            </li>
            <li>
              <b>Region:</b> {country.region}
            </li>
            <li>
              <b>Sub Region:</b> {country.subregion}
            </li>
            <li>
              <b>Capital:</b> {country.capital || 'no data'}
            </li>
          </ul>

          <ul>
            <li>
              <b>Top Level Domain:</b>{' '}
              {country.tld.map((d) => (
                <span key={d}>{d} </span>
              ))}
            </li>
            <li>
              <b>Currency:</b>{' '}
              {country.currencies
                ? Object.values(country.currencies).map((currency) => (
                    <span key={currency.symbol}>{currency.name} </span>
                  ))
                : 'no data'}
            </li>
            <li>
              <b>Languages:</b>{' '}
              {country.languages
                ? Object.values(country.languages).map((language, i, arr) => (
                    <span key={language}>
                      {language}
                      {i !== arr.length - 1 ? ', ' : ''}
                    </span>
                  ))
                : 'no data'}
            </li>
            <li>
              <b>See on the map:</b>{' '}
              <a
                href={country.maps.googleMaps}
                target='_blank'
                rel='noopener noreferrer'
              >
                Google Maps <LuExternalLink />
              </a>
              {', '}
              <a
                href={country.maps.openStreetMaps}
                target='_blank'
                rel='noopener noreferrer'
              >
                Open Street Maps <LuExternalLink />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.meta}>
          <span>
            <b>Border Countries:</b> <i>(experimental API)</i>
          </span>
          {!country.borders ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.tagGroup}>
              {country.borders.map((borderCountryAbr, i) => (
                <span
                  className={styles.tag}
                  key={borderCountryAbr}
                  onClick={() => {
                    navigate(`/country/${borderCountryAbr}`);
                  }}
                >
                  {getNeighborNameFromCode(allCountries, borderCountryAbr)}
                  {/* {neighborNames[i]} */}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
