import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

//import { ArticleList } from "../article";

interface BlomEinProps {
  blomEin_data: any;
}

interface NavDot {
  children: any;
}

const NavItem: FC<NavDot> = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

const BlomEin: FC<BlomEinProps> = ({ blomEin_data }) => {
  const router = useRouter();
  const isOnHome = router.pathname === "/";

  return (
    <NavItem key={prismicH.asText(blomEin_data.link)}>
      <PrismicLink href={`/rosir/${blomEin_data.label}`}>
        <PrismicText field={blomEin_data.label} />
      </PrismicLink>
    </NavItem> 
  );
};

export default BlomEin;