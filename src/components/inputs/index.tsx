import React from 'react';
import styles from './index.module.scss';
import { SearchInput } from './search-input';

export const Inputs = () => {
  return (
    <section className={styles.section}>
      <h3>Inputs</h3>
      <div className={styles.wrapper}>
        <SearchInput />
      </div>
    </section>
  );
};
