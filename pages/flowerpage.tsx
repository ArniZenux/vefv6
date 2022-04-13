import Head from 'next/head'
import * as prismicH from "@prismicio/helpers";

import { Layout } from '../components/Layout';
import { HomeHeader } from "../components/HomeHeader";
import { SetupRepo } from '../components/SetupRepo';

import { components } from "../slices/index.js";
import { createClient } from "../prismicio";
import { SliceZone } from '@prismicio/react';

function Home({ FlowerPage, slices }) {
  console.log("Function Flower(): " + FlowerPage);
  if( !FlowerPage ){
    return <SetupRepo />;
  }

  return (
    <Layout> 
      <Head>
        <title> {prismicH.asText(FlowerPage.data.blom)} </title> 
       </Head>
       <HomeHeader
        label1={FlowerPage.data.blom}
       />
      <SliceZone slices={slices} components={components} />
    </Layout>      
  )
}

export async function getStaticProps(context) {
  const client = createClient({ context });

  let FlowerPage = null; 

  try {
    FlowerPage = await client.getSingle("fp1");
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
      FlowerPage,
      slices: FlowerPage.data.slices,
    },
  };
}

export default Home;
