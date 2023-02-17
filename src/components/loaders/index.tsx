import React from 'react';
import styles from './index.module.scss';
import { JumpingDots } from './jumping-dots';
import { Circling } from './circling';

export const Loaders = () => {
  return (
    <section>
      <h3>Loaders</h3>
      <div className={styles.wrapper}>
        <JumpingDots />
        <Circling />
      </div>
    </section>
  );
};
