import React, { FC } from 'react';
import { PrismicRichText } from '@prismicio/react'

export type Slice = {
  type: string; 
  primary: {
    quote : any; 
    source : any;
  }
};

interface QuoteProps {
  slice: any;
}

const Quote: FC<QuoteProps> = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.quote ?
        <PrismicRichText field={slice.primary.quote}/>
        : <h2>Ljóð</h2>
      }
    </span>
    {
      slice.primary.source ?
      <PrismicRichText field={slice.primary.source}/>
      : <p>Þú ert svo fallegur ;)</p>
    }
    <style jsx>{`
        section {
          max-width: 500px;
          margin: 1em auto;
          text-align: left;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default Quote;
