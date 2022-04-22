import React, { FC } from 'react';
import { asText } from '@prismicio/helpers';

interface ImageProps {
  slice: any;
}

const Image: FC<ImageProps> = ({ slice }) => {
  const image = slice.primary.image;

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
