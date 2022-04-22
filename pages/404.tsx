import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function NotFound(){
  return (
    <Layout>
      <Head>
        <title> Verkefni 6 - 2022 </title>
      </Head>
       <h2> 404 - Engin síða </h2>
       <hr/>
       <Link href="/">Til baka</Link>
    </Layout>
  );
}