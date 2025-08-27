import { Wrapper } from '@/components/Wrapper';
import styles from './Details.module.scss';
import {
  useNavigate,
  useParams,
  type NavigateFunction,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/redux-hook';
import { getDetailedCountry } from '@/redux/asyncThunks';
import { getDetailedCountryURL } from '@/api_config';
import { useSelector } from 'react-redux';
import {
  resetDetailedCountryState,
  selectDetailedCountry,
} from '@/redux/slices/detailedCountrySlice';
import { Button } from '@/components/Button';
import { IoArrowBack } from 'react-icons/io5';
import { CountryInfo } from '@/components/CountryInfo';

interface DetailsProps {}

type DetailsParams = {
  name: string;
};

export const Details = ({}: DetailsProps) => {
  const dispatch = useAppDispatch();

  const detailedCountry = useSelector(selectDetailedCountry);
  const { country, loadingStatus, error } = detailedCountry;

  const navigate: NavigateFunction = useNavigate();
  const { name: nameParam } = useParams<DetailsParams>();

  useEffect(() => {
    if (nameParam) {
      dispatch(getDetailedCountry(getDetailedCountryURL(nameParam)));
    }

    return () => {
      dispatch(resetDetailedCountryState()); // to remove flashing of previous detailed country
    };
  }, [nameParam]);

  return (
    <div className={styles.details}>
      <Wrapper>
        <Button className={styles.btn} onClick={() => navigate(-1)}>
          <IoArrowBack /> Back
        </Button>

        {error && <h2>Can't load Country</h2>}
        {loadingStatus === 'loading' ? (
          <h2>Loading...</h2>
        ) : country ? (
          // nameParam === country.name.common - предотвращаем промигивание предыдущей страны, но не удаляем её из стора на случай повторного запроса той же самой страны (но приходится просто удалять страну из стора при размонтировании, из-за различных  nameParam в API для разных стран)
          <CountryInfo country={country} />
        ) : (
          <h2>No Country data loaded.</h2>
        )}
      </Wrapper>
    </div>
  );
};
