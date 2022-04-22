import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';

export default function NotFound(){
  return (
    <Layout>
      <Head>
        <title> Verkefni 6 - 2022 </title>
      </Head>
       <h2> 404 - Engin síða </h2>
       <Link href="/">Til baka</Link>
    </Layout>
  );
}