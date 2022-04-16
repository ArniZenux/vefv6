import { PrismicRichText } from '@prismicio/react';
import React, { FC } from 'react';
import s from './Home.module.scss';

/**
 * The site's global header.
 */
interface Stuff{
  label1: any;
  lysing1: any;
} 

const HomeHeader: FC<Stuff> = ({ label1, lysing1 }) => {
  return (
    <header className={s.home__header}>
      <h1 className={s.home__h1}>
        <PrismicRichText field={label1} />
      </h1>
      <h2 className={s.home__h2}> 
        <PrismicRichText field={lysing1} />
      </h2>
  </header>
  );
};

export default HomeHeader;
