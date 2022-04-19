import Head from 'next/head';
import Link from "next/link";
import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { createClient } from "../../prismicio";
import  Layout from '../../components/Layout/Layout';

interface RosirProps {
  rosir: any;
}

/*
interface dras {
  params : any;
}
*/

const Rosir: FC<RosirProps> = ({ rosir }) => {
  return (
    <Layout>
       <Head>
        <title> Verkefni 6 - 2022 </title>
      </Head>
      <h1>Title</h1>
      <h2>Slice</h2>
      <Link href={`/`}>Til baka</Link>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const client = createClient();
 
  const rosir = await client.getByUID("article", params?.uid as any);
  
  console.log("rosir : " + rosir); 

  return {
    props: {
      rosir,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  
  const rosir = await client.getAllByType("article");
  console.log("rosir : " + rosir); 

  return {
    paths: [
      { params : { blomNr : '1' } }
    ],
    fallback: false
  };
};

export default Rosir;
