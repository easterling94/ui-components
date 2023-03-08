import React from 'react';
import styles from './app.module.scss';
import { Inputs } from '../inputs/index';
import { Loaders } from '../loaders/index';
import { Sliders } from '../sliders/index';

export const App = () => {
  return (
    <div className={styles.app}>
      <Loaders />
      <Inputs />
      <Sliders />
    </div>
  );
};
