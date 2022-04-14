import { PrismicText, PrismicLink, PrismicRichText } from '@prismicio/react';
import React, { FC } from 'react';
//import Image from 'next/image';

/**
 * The site's global header.
 */
interface Drasl{
  label1: any;
  lysing1: any;
  link1: any;
} 

const HomeHeader: FC<Drasl> = ({ label1, lysing1, link1 }) => {
  return (
    <header className="grid justify-items-center gap-4 border-b border-neutral-200 pb-12">
      <h1 className="text-center text-4xl font-black md:text-5xl">
        <PrismicRichText field={label1} />
      </h1>
      <p className="text-center text-lg text-neutral-400">
        <PrismicText field={lysing1} />
      </p>
      <PrismicLink field={link1}>RosRos</PrismicLink>
  </header>
  );
};

export default HomeHeader;
