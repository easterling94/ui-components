import React from 'react';
import styles from './app.module.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Wrapper = ({ title, children }: Props) => {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.wrapper}>
        {React.Children.map(children, (child) => (
          <div className={styles.child}>{child}</div>
        ))}
      </div>
    </section>
  );
};
