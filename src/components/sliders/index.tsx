import React from 'react';
import styles from './index.module.scss';
import { Toggle } from './sliders';

export const Sliders = () => {
  return (
    <section className={styles.section}>
      <h3>Sliders</h3>
      <div className={styles.wrapper}>
        <Toggle />
      </div>
    </section>
  );
};
