import { PrismicText } from "@prismicio/react";

/**
 * The site's global header.
 */
export const HomeHeader = ({ label1, lysing1 }) => {
  return (
    <header className="grid justify-items-center gap-4 border-b border-neutral-200 pb-12">
      <h1 className="text-center text-4xl font-black md:text-5xl">
        <PrismicText field={label1} />
      </h1>
      <p className="text-center text-lg text-neutral-400">
        <PrismicText field={lysing1} />
      </p>
    </header>
  );
};