import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Quote = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.quote ?
        <PrismicRichText field={slice.primary.quote}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.source ?
      <PrismicRichText field={slice.primary.source}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default Quote;
