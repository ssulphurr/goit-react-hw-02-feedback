import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
