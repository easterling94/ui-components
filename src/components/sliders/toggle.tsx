import React, { useState } from 'react';
import styles from './sliders.module.scss';

export const Toggle = () => {
  const [modeState, setModeState] = useState<'left' | 'right'>('left');
  const changeMode = () => {
    modeState === 'left' ? setModeState('right') : setModeState('left');
  };
  return (
    <>
      <div className={styles.wrapper}>
        <p>Option 1</p>
        <div className={styles.toggle} onClick={changeMode}>
          <div
            className={styles.circle}
            style={modeState === 'left' ? { left: '0px' } : { left: '40px' }}
          ></div>
        </div>
        <p>Option 2</p>
      </div>
    </>
  );
};
