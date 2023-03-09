import React, { useState } from 'react';
import styles from './circling.module.scss';
export const Circling = () => {
  const [animation, setAnimation] = useState(false);
  const stop = () => {
    setAnimation(!animation);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <span
          className={`${animation ? styles.loaderWithAnim : styles.loader}`}
        ></span>
      </div>
      <button id='stop' onClick={stop}>
        Start/Stop
      </button>
    </>
  );
};
