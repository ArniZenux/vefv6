import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react';
import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import { createClient, linkResolver } from '../prismicio';
import  Layout from '../components/Layout/Layout';

interface RosirProps {
  page: any;
}

const Rosir: FC<RosirProps> = ({page}) => {
  if(!page){
  return (
    <Layout>
       <Head>
        <title> Verkefni 6 - 2022 </title>
      </Head>
      <h1>Enginn listi</h1>
      <hr/>
      <Link href={`/`}>Til baka</Link>
    </Layout>
   );
  }

  return (
    <Layout>
       <Head>
        <title> Verkefni 6 - 2022 </title>
      </Head>
        <h2>
          {prismicH.asText(page.data.title)} 
        </h2>
        <SliceZone slices={page.data.slices} components={components} />
      <hr/>
      <Link href={`/`}>Til baka</Link>
    </Layout>
  );
};

export async function getStaticProps({params}:{params : any }){
  const client = createClient(); 
  
  const page = await client.getByUID('page', params.uid); 
  
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths(){
  const client = createClient();

  const pages = await client.getAllByType('page');
  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback : false,
  };
}

export default Rosir;
