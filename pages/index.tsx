import Head from 'next/head';
import { createClient } from '../prismicio';
import * as prismicH from '@prismicio/helpers';
import Layout from '../components/Layout/Layout';
import BlomList  from '../components/Blom/BlomList';
import Header from '../components/Header/Header';
import React, { FC } from 'react';

export type zData = {
  type: string; 
  data: {
    label1 : any; 
    lysing : any; 
  }
};

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
        <Header
        label1={navigation.data.label1}
        lysing1={navigation.data.lysing1}
        />
        <p> Engin blómlisti </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title> {prismicH.asText(navigation.data.label1)} </title> 
       </Head>
       <Header
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
 
  navigation = await client.getSingle('navigation');
  
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
