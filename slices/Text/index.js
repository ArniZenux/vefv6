import React from 'react'
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from '@prismicio/react'

const Text = ({ slice }) => {
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
