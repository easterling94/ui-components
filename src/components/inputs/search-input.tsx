import React, { SyntheticEvent, useState } from 'react';
import styles from './search-input.module.scss';
import logo from '../../assets/search_icon_test.png';
export const SearchInput = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(`Sends value ${value} to DB`);
    setValue('');
  };
  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <button className={styles.searchBtn} type='submit'>
        <img src={logo} width='20px' height='20px' alt='Search icon'></img>
      </button>
      <input
        className={styles.searchField}
        placeholder='Ввидите данные'
        type='text'
        value={value}
        onChange={onChange}
      ></input>
    </form>
  );
};
