import React, { FC } from 'react';
import { asText } from '@prismicio/helpers';

export type Slice = {
  type: string; 
  primary: {
    image? : any;
    url : any; 
    imagetxt : any;
  }
};

interface ImageProps {
  slice: any;
}

const Image: FC<ImageProps> = ({ slice }) => {

  return (
    <div>
      <img 
        width={500}
        src={slice.primary.image?.url ?? 'no image'}
        alt={asText(slice.primary.imagetxt) ?? 'no alt'}
      />
    </div>
  );
}

export default Image;
