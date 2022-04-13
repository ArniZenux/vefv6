import Head from 'next/head'
import * as prismicH from "@prismicio/helpers";
import { GetStaticProps } from "next";
import { Layout } from '../components/Layout';
import { HomeHeader } from "../components/HomeHeader";
import { SetupRepo } from '../components/SetupRepo';
import React, { FC } from "react";
import { components } from "../slices/index.js";
import { createClient } from "../prismicio";
import { SliceZone } from '@prismicio/react';

interface IndexProps {
  HomePage: any;
  slices: any;
}

const Home: FC<IndexProps> = ({ HomePage, slices }) => {
  console.log("Function Home(): " + HomePage);
  if( !HomePage ){
    return <SetupRepo />;
  }

  return (
    <Layout> 
      <Head>
        <title> {prismicH.asText(HomePage.data.label1)} </title> 
       </Head>
       <HomeHeader
        label1={HomePage.data.label1}
        lysing1={HomePage.data.lysing1}
        image1={HomePage.data.image1} 
        link1={HomePage.data.link1}  
        flower1={HomePage.data.flower1}     
       />
      <SliceZone slices={slices} components={components} />
    </Layout>      
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  let hp1 = null;
  //let FlowerPage = null; 

  try {
    hp1 = await client.getSingle("hp1");
    //FlowerPage = await client.getSingle("fp1");
  } catch {
    // If we reach this line, it means a Blog Home document was not created
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

/*  const posts = await client.getAllByType("post", {
    orderings: [{ field: "my.post.date", direction: "desc" }],
  });
*/
  return {
    props: {
      hp1,
      slices: hp1?.data.slices,
      //FlowerPage,
    },
  };
}

export default Home;
