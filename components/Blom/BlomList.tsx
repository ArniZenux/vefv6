import React, { FC } from "react";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import b from './Blom.module.scss';

interface BlomListProps {
  blomlist: any;
}

interface NavDot {
  children: any;
}

const NavItem: FC<NavDot> = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

const BlomList: FC<BlomListProps> = ({ blomlist }) => {
  return (
    <ul className={b.blom__ul}>
      {blomlist.data?.links.map((item : any , i : number) => (
        <NavItem key={i}>
          <PrismicLink href={`/rosir/${item.blomNr}`}>
           <PrismicText field={item.label} />
          </PrismicLink>
        </NavItem>
        ))}
    </ul>
  );
};

export default BlomList;
