import { PrismicText, PrismicLink, PrismicRichText } from '@prismicio/react';

/**
 * The site's global header.
 */
export const HomeHeader = ({
  label1, lysing1, image1, link1, flower1,
}) => (
  <header className="grid justify-items-center gap-4 border-b border-neutral-200 pb-12">
    <h1 className="text-center text-4xl font-black md:text-5xl">
      <PrismicText field={label1} />
    </h1>
    <p className="text-center text-lg text-neutral-400">
      <PrismicText field={lysing1} />
    </p>
    <PrismicLink field={link1}>RosRos</PrismicLink>
    <PrismicLink field={flower1}>Rós og allt um rós</PrismicLink>
    <PrismicLink document={flower1}>Rós og allt um rós</PrismicLink>

    <img
      src={image1.url}
      alt={image1.alt}
    />
  </header>
);
