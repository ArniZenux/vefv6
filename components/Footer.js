import { PrismicLink } from "@prismicio/react";

/**
 * Links and credit to be used at the bottom of every page.
 */
export const Footer = () => {
  return (
    <footer>
      <p>
        Proudly published with{" "}
        <PrismicLink
          href="https://prismic.io"
          target="_blank"
        >
          Prismic
        </PrismicLink>
      </p>
    </footer>
  );
};