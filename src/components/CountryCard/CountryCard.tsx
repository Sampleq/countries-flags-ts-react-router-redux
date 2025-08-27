import type { Country } from '@/types';
import styles from './CountryCard.module.scss';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import { highlightMatch } from '@/utils/highlightMatch';

interface CountryCardProps {
  country: Country;
  searchPrompt?: string;
}

export const CountryCard = ({ country, searchPrompt }: CountryCardProps) => {
  const navigate: NavigateFunction = useNavigate();

  const infoData = [
    {
      title: 'Population',
      description: country.population.toLocaleString(),
    },
    {
      title: 'Region',
      description: country.region,
    },
    {
      title: 'Capital',
      description: country.capital,
    },
  ];

  // console.log(highlightMatch(country.name.common, searchPrompt!));

  return (
    <div
      className={styles.countryCard}
      onClick={() => {
        // console.log(country.name.common);
        // //* fix free API bug
        if (country.name.common === 'United States') {
          navigate(`country/USA`);
          return;
        }

        navigate(`country/${country.name.common}`);
      }}
      tabIndex={0}
    >
      {/* <img src={country.flags.png} alt={country.flags.alt} /> */}
      <img src={country.flags.svg} alt={country.flags.alt} />

      <div className={styles.content}>
        {/* <h3>{country.name.common}</h3> */}
        <h3>
          {searchPrompt
            ? highlightMatch(country.name.common, searchPrompt!)
            : country.name.common}
        </h3>
        <ul>
          {infoData.map((el) => (
            <li key={el.title}>
              <b>{el.title}:</b> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
