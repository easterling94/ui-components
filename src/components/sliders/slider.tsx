import React, { useState, useEffect, useCallback } from 'react';
import styles from './slider.module.scss';

export const Slider = () => {
  const [currentPos, setCurrentPos] = useState(5);
  const [clienXPos, setClientXPos] = useState<number>();
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const circle = document.getElementById('circle');
    setClientXPos(circle?.getBoundingClientRect().x);
  }, []);

  useEffect(() => {
    if (!mouseDown) {
      window.removeEventListener('mousemove', handleMouseMove);
      return;
    }
    window.addEventListener('mousemove', handleMouseMove);
  }, [mouseDown]);

  function handleMouseDown(): void {
    setMouseDown(true);
  }
  function handleMouseUp(): void {
    setMouseDown(false);
  }
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (e.clientX - clienXPos! < 5) {
        setCurrentPos(5);
        return;
      }
      if (e.clientX - clienXPos! > 130) {
        setCurrentPos(130);
        return;
      }
      setCurrentPos(e.clientX - clienXPos!);
    },
    [setCurrentPos, clienXPos]
  );
  return (
    <>
      <div className={styles.title}>Сколько вешать в граммах?</div>
      <div className={styles.title}>{Math.round(currentPos)}</div>
      <div className={styles.slider}>
        <div
          id='circle'
          className={!mouseDown ? styles.circle : styles.circleActive}
          style={{ left: `${currentPos}px` }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        ></div>
      </div>
    </>
  );
};
