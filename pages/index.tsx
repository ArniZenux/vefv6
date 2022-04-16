import Head from 'next/head';
import { GetStaticProps } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

import { components } from "../slices";
import * as prismicH from "@prismicio/helpers";

import { Layout } from '../components/Layout/Layout';
import HomeHeader from "../components/Home/HomeHeader";
import React, { FC } from 'react';

interface IndexProps {
  HomePage: any;
}

const Home: FC<IndexProps> = ({ HomePage }) => {
  console.log("Function Home(): " + HomePage);
  if( !HomePage ){
    return (
        <Layout>o
          <Head>
            <title> Verkefni 6 - 2022 </title>
          </Head>
          <p> Það virkar en ekki á prismic.io - rétt leið </p>
        </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title> {prismicH.asText(HomePage.data.label1)} </title> 
       </Head>
       <HomeHeader
        label1={HomePage.data.label1}
        lysing1={HomePage.data.lysing1}
       />
      <SliceZone slices={HomePage.data.slices} components={components} /> 
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  let HomePage = null;
  let gulRos = null;

  try {
    HomePage = await client.getSingle("hp1");
  } catch {
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

  return {
    props: {
      HomePage: HomePage,
      gulRos: HomePage?.data,
    },
  };
}

export default Home;
