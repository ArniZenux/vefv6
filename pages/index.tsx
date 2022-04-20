import Head from 'next/head';
import { createClient } from "../prismicio";
import * as prismicH from "@prismicio/helpers";
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

export async function getServerSideProps() {
  const client = createClient();
  
  let navigation = null;
 
  navigation = await client.getSingle("navigation");
  
  if(!navigation){
    return {
      props: {
        navigation : null,
      }
    }
  }
  
  return {
    props: {
      navigation : navigation,
    },
  };
}

export default Index;
