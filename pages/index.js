import Head from 'next/head'
import * as prismicH from "@prismicio/helpers";

import { Layout } from '../components/Layout';
import { HomeHeader } from "../components/HomeHeader";
import { SetupRepo } from '../components/SetupRepo';

import { createClient } from "../prismicio";

function Home({ HomePage }) {
  console.log("Function Home(): " + HomePage);
  if( !HomePage ){
    return <SetupRepo />;
  }

  return (
    <Layout> 
      <Head>
        <title> {prismicH.asText(HomePage.data.label1)} </title> 
       </Head>
       <p>Tilraun</p> 
       <HomeHeader
        label1={HomePage.data.label1}
        lysing1={HomePage.data.lysing1}
       />
    </Layout>      
  )
}


export async function getStaticProps(context) {
  const client = createClient({ context });

  let HomePage = null;
  console.log("getStaticProps: " +  HomePage);
  try {
    HomePage = await client.getSingle("hp1");
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
      HomePage,
    },
  };
}

export default Home;
