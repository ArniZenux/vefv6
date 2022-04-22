import React, { FC } from 'react';
import { PrismicRichText } from '@prismicio/react'

interface TextProps {
  slice: any;
}

const Text: FC<TextProps> = ({ slice }) => {
  return (
    <>
    { slice.primary.title ? 
      <PrismicRichText field={slice.primary.title}/> : <h3>Ekki strengur</h3> 
    }
    <hr/>
    { slice.primary.description ? 
      <PrismicRichText field={slice.primary.description}/> : <h3>Ekki strengur</h3> 
    }
    </>
  );
}

export default Text;
