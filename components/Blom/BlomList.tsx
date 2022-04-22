import React, { FC } from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import b from './Blom.module.scss';

export type zData = {
  type: string; 
  data: {
    links : any; 
    item : any; 
  }
};

export type Data = zData; 
export type List = any; 

interface BlomListProps {
  blomlist: Data;
}

interface NavDot {
  children: List;
}

const NavItem: FC<NavDot> = ({ children }) => {
  return (
    <li>{children}</li>
  );
};

const BlomList: FC<BlomListProps> = ({ blomlist }) => {
  return (
    <ul className={b.blom__ul}>
      {blomlist.data?.links.map((item : any , i : number) => (
        <NavItem key={i}>
          <PrismicLink href={`${item.blomNr}`}>
           <PrismicText field={item.label} />
          </PrismicLink>
        </NavItem>
        ))}
    </ul>
  );
};

export default BlomList;
