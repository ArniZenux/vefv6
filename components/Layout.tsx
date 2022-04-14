import React, { FC, ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="px-6 pt-12 pb-10 text-neutral-700 antialiased md:pt-20">
    <div className="mx-auto w-full max-w-3xl">
      <main>{children}</main>
    </div>
  </div>
);
