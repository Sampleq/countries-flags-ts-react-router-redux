import { IoSearch } from 'react-icons/io5';
import styles from './Search.module.scss';
import { useSelector } from 'react-redux';
import {
  changeFilterName,
  clearFilterName,
  selectFilterName,
} from '@/redux/slices/filtersSlice';
import { useAppDispatch } from '@/redux/redux-hook';
import { TiDelete } from 'react-icons/ti';

interface SearchProps {}

export const Search = ({}: SearchProps) => {
  const dispatch = useAppDispatch();

  const filterName = useSelector(selectFilterName);

  return (
    <label className={styles.search}>
      <IoSearch />
      <input
        id='searchInput'
        type='text'
        placeholder='Search for a country...'
        value={filterName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(changeFilterName(e.target.value))
        }
      />

      {filterName.length ? (
        <TiDelete
          className={styles.clear}
          onClick={() => dispatch(clearFilterName())}
        />
      ) : null}
    </label>
  );
};
