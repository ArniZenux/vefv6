import Head from 'next/head';
import Link from "next/link";
import React, { FC } from "react";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from "../../prismicio";
import  Layout from '../../components/Layout/Layout';

interface RosirProps {
  page: any;
}

const Rosir: FC<RosirProps> = ({page}) => {
  console.log("Rosir: " + page);

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
      <h1>Listi er til</h1>
      <hr/>
      <Link href={`/`}>Til baka</Link>
    </Layout>
  );
};

export async function getStaticProps({params}:{params : any }, {previewData}:{previewData: any}){
  const client = createClient(previewData); 
  
  const page = await client.getByUID("page", params.uid); 
  
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths(){
  const client = createClient();

  const pages = await client.getAllByType("page");
  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback : false,
  };
}

/*
export async function getServerSideProps({params} : {params: any} ) {
  const client = createClient(); 

  const { uid } = params;

  let rosir = null; 
   
  if(typeof uid === 'string'){
    console.log("string");
    rosir =  client.getByUID('article', uid); 
  }
  
  if(!rosir){
    return {
      props :{
        rosir : null,
        fallback : false
      },
    };
  };
 

  return {
    props: { 
      rosir, 
      fallback: false },
  };
};
*/

export default Rosir;
