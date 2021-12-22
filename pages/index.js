import Head from 'next/head';

import Articles from '../components/Articles';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Next.js Practice</title>
        <meta name="keywords" content="react, next.js, web development, tutorial, node.js, javascript, jsx, server-side rendering, static-site generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Articles articles={articles} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?limit=6');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
};
