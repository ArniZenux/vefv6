import { PrismicRichText } from '@prismicio/react';
import React, { FC } from 'react';
import s from './Header.module.scss';

export type RichText = any

interface Stuff{
  label1: RichText;
  lysing1: RichText;
} 

const Header: FC<Stuff> = ({ label1, lysing1 }) => {
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

export default Header;
