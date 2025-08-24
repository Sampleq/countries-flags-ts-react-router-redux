import type { Country } from '@/types';
import styles from './CountryCard.module.scss';

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
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

  return (
    <div className={styles.countryCard}>
      <img src={country.flags.png} alt={country.flags.alt} />

      <div className={styles.content}>
        <h3>{country.name.common}</h3>
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
