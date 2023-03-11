import React, { SyntheticEvent, useState, useEffect } from 'react';
import styles from './slider.module.scss'

export const Slider = () => {
  const [currentPos, setCurrentPos] = useState(5);
  const [clienXPos, setClientXPos] = useState<number>();
  const [newPos, setNewPos] = useState(0);

  useEffect(() => {
    const slider = document.getElementById('slider');
    setClientXPos(slider?.getBoundingClientRect().x)
  }, [])

  const handleDragStart = (e: React.DragEvent): void => {
    const image = new Image(0,0);
    e.dataTransfer.setDragImage(image,0,0)
  }
  const handleDrag = (e: React.MouseEvent<Element, MouseEvent>): void => {
    if(e.clientX - clienXPos! > 140) {
      return
    }
    if (e.clientX - clienXPos! < 0) {
      return
    }
    setCurrentPos(e.clientX - clienXPos!)
  }
  const handleDragEnd = (e: React.MouseEvent<Element, MouseEvent>) => {
    if(e.clientX - clienXPos! > 140) {
      console.log('more')
      setCurrentPos(140)
      console.log(currentPos)

    }
    if (e.clientX - clienXPos! < 0) {
      console.log('less')
      setCurrentPos(5)
      console.log(currentPos)
    }
    setCurrentPos(e.clientX - clienXPos!)
  }
  return (
    <>
      <div className={styles.slider} >
        <div id='slider' draggable className={styles.circle} onDrag={e => handleDrag(e)} style={{left: `${currentPos}px`}} onDragStart={e => handleDragStart(e)} onDragEnd={e => {handleDragEnd(e)}}></div>
      </div>
    </>
  )
}