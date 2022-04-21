import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from '@prismicio/react'

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <figure className="grid grid-cols-1 gap-4">
        {prismicH.isFilled.image(image) && (
          <div className="bg-gray-100">
            <NextImage
              src={prismicH.asImageSrc(image, {
                w: undefined,
                h: undefined,
              })}
              alt={image.alt}
              width={image.dimensions.width}
              height={image.dimensions.height}
              layout="responsive"
            />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className="text-center font-serif italic tracking-tight text-slate-500">
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
  );
}

export default Image;
