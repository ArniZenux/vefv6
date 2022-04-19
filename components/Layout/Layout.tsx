import React, { FC, ReactNode } from 'react';
import s from './Layout.module.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <div>
      <main className={s.layout__main}>{children}</main>
    </div>
  </div>
);

export default Layout;