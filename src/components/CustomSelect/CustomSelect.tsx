import Select from 'react-select';
import styles from './CustomSelect.module.scss';
import type { SelectOption } from '@/types';

interface CustomSelectProps {
  [key: string]: any;
}

export const CustomSelect = (props: CustomSelectProps) => {
  // console.log('props', props);

  const options: SelectOption[] = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];

  return (
    <Select
      placeholder='Filter by Region'
      options={options}
      isSearchable={false}
      isClearable
      styles={{
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: 'var(--colors-text)', // color of text when option is selected
        }),

        control: (baseStyles, state) => ({
          ...baseStyles,
          // borderColor: state.isFocused ? 'red' : baseStyles.borderColor,
          backgroundColor: 'var(--colors-ui-base)',
          // color: 'var(--colors-text)',
          borderRadius: 'var(--radii)',
          padding: '0.25rem',
          border: 'none',
          boxShadow: 'var(--shadow)',
          height: '5rem',
          width: '20rem',
        }),

        option: (provided, state) => ({
          ...provided,
          cursor: 'pointer',
          color: 'var(--colors-text)',
          backgroundColor: state.isSelected
            ? 'var(--colors-bg)'
            : 'var(--colors-ui-base)',
        }),

        menu: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: 'var(--colors-ui-base)', // container of select options dropdown
        }),

        clearIndicator: (baseStyles, props) => ({
          ...baseStyles,
          cursor: 'pointer',
          color: 'crimson',

          ':hover': {
            color: 'red',
          },
        }),

        dropdownIndicator: (baseStyles, props) => ({
          ...baseStyles,
          cursor: 'pointer',
          ':hover': {
            color: 'green',
          },
        }),
      }}
      // defaultValue={selectedOption}
      // onChange={() => {}}
      // value={{ value: 'asia', label: 'Asia' }}
      {...props} // просто прокидываем свойства из родительского CustomSelect, чтобы мы могли их задавать сразу у CustomSelect, т.о. немного разделив стили и логику Select из react-select
    />
  );
};
