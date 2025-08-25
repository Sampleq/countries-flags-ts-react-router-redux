import { Search } from '../Search';
import styles from './Controls.module.scss';
import { CustomSelect } from '../CustomSelect';
import { useAppDispatch } from '@/redux/redux-hook';
import { useSelector } from 'react-redux';
import {
  changeFilterRegion,
  selectFilterRegion,
} from '@/redux/slices/filtersSlice';
import type { SelectOption } from '@/types';

interface ControlsProps {}

export const Controls = ({}: ControlsProps) => {
  const dispatch = useAppDispatch();

  const filterRegion = useSelector(selectFilterRegion);
  // console.log('filterRegion:', filterRegion);

  return (
    <div className={styles.controls}>
      <Search />

      <CustomSelect
        // библиотека react-select ожидает такой странный value - объект вида { value: 'asia', label: 'Asia' } или null когда ничего не выбрано
        value={
          filterRegion
            ? {
                value: filterRegion,
                label:
                  filterRegion![0].toUpperCase() +
                  filterRegion?.slice(1, filterRegion.length),
              }
            : null
        }
        // selectedOption - аргумент, предоставляемый библиотекой react-select
        onChange={(selectedOption: SelectOption) => {
          // console.log('selectedOption', selectedOption);
          dispatch(changeFilterRegion(selectedOption?.value || null));
        }}
      />
    </div>
  );
};
