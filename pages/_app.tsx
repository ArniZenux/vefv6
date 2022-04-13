import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { Global } from "@emotion/react";
import { linkResolver, repositoryName } from '../prismicio'
import { globalStyles } from "../styles";
//import { '../styles/globals.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps } : AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
       <Global styles={globalStyles} />        
       <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
