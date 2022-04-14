// import type { NextPage } from 'next';
import Head from 'next/head';
// import * as prismicH from "@prismicio/helpers";
import React, { FC } from 'react';
import { Layout } from '../components/Layout';
// import { HomeHeader } from "../components/HomeHeader";
import { SetupRepo } from '../components/SetupRepo';
// import { components } from "../../slices/index.js";
// import { createClient } from "../../prismicio";
// import { SliceZone } from '@prismicio/react';

// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

interface IndexProps {
  HomePage: any;
  slices: any;
}

/* const Home: FC<IndexProps> = ({ HomePage, slices }) => {
  console.log("Function Home(): " + HomePage);
  if( !HomePage ){
    return <SetupRepo />;
  }

  return (
    <Layout>
      <Head>
        <title>Hello tilraun</title>
       </Head>
    </Layout>
  )
} */

const Home: FC<IndexProps> = () => (
  <Layout>
    <Head>
      <title>Hello tilraun</title>
    </Head>
  </Layout>
);

export default Home;
