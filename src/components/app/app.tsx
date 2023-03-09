import React from 'react';
import styles from './app.module.scss';
import { Wrapper } from './wrapper';
import { Circling } from '../loaders/circling';
import { JumpingDots } from '../loaders/jumping-dots';
import { Toggle } from '../sliders/toggle';
import { SearchInput } from '../inputs/search-input';

export const App = () => {
  return (
    <div className={styles.app}>
      <Wrapper title='Loaders'>
        <Circling />
        <JumpingDots />
      </Wrapper>
      <Wrapper title='Inputs'>
        <SearchInput />
      </Wrapper>
      <Wrapper title='Sliders'>
        <Toggle />
      </Wrapper>
    </div>
  );
};
