import React, { useState } from 'react';
import styles from './toggle.module.scss';

export const Toggle = () => {
  const [modeState, setModeState] = useState<'left' | 'right'>('left');
  const changeMode = () => {
    modeState === 'left' ? setModeState('right') : setModeState('left');
  };
  return (
    <>
      <div className={styles.wrapper}>
        <p>Opt 1</p>
        <div
          className={modeState === 'left' ? styles.toggle : styles.toggleRight}
          onClick={changeMode}
        >
          <div
            className={styles.circle}
            style={modeState === 'left' ? { left: '0px' } : { left: '40px' }}
          ></div>
        </div>
        <p>Opt 2</p>
      </div>
    </>
  );
};
