import React from 'react';
import { Inputs } from '../inputs/index';
import { Loaders } from '../loaders/index';
import styles from './app.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Loaders />
      <Inputs />
    </div>
  );
};
