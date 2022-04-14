//import type { NextPage } from 'next'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { GetStaticProps } from "next";
import * as prismicH from "@prismicio/helpers";
import React, { FC } from 'react';
import { Layout } from '../components/Layout';
import HomeHeader from "../components/HomeHeader";
import { createClient } from "../prismicio";

interface IndexProps {
  HomePage: any;
}

const Home: FC<IndexProps> = ({ HomePage }) => {
  console.log("Function Home(): " + HomePage);
  if( !HomePage ){
    return (
        <Layout>
          <Head>
            <title> Hello tilrun </title>
          </Head>
          <p> ekki til en flott hjá þer </p>
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
        link1={HomePage.data.link1}  
       />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  let HomePage = null;

  try {
    HomePage = await client.getSingle("hp1");
  } catch {
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

  return {
    props: {
      HomePage: HomePage,
    },
  };
}

export default Home;
