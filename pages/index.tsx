import Head from 'next/head';
import { GetStaticProps } from "next";
import { createClient } from "../prismicio";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";

import Layout from '../components/Layout/Layout';
import BlomList  from '../components/Blom/BlomList';
import HomeHeader from '../components/Home/HomeHeader';
import React, { FC } from 'react';

interface IndexProps {
  navigation: any;
}

const Index: FC<IndexProps> = ({ navigation  }) => {
  
  if( !navigation ){
    return (
      <Layout>
        <Head>
          <title> Verkefni 6 - 2022 </title>
        </Head>
        <p> Það virkar en ekki á prismic.io - þú ert á réttri leið </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title> {prismicH.asText(navigation.data.label1)} </title> 
       </Head>
       <HomeHeader
        label1={navigation.data.label1}
        lysing1={navigation.data.lysing1}
       />
      <BlomList blomlist={navigation} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();
  let navigation = null;
 
  try {
    navigation = await client.getSingle("navigation");
  } catch {
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }
    
  return {
    props: {
      navigation : navigation,
    },
  };
}

export default Index;
