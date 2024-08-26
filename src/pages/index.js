// pages/index.js
import Head from 'next/head';
import Grid from '../components/Grid';
import SearchBar from '../components/SearchBar';
import Spreadsheet from '@/components/Spreadsheet';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spreadsheet App</title>
        <meta name="description" content="Spreadsheet app with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Spreadsheet App</h1>
        <SearchBar />
        {/* <Grid /> */}
        <Spreadsheet/>
      </main>
    </div>
  );
}
