import Link from 'next/link';
import { useRouter } from 'next/router';

const Article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <h1>{article.body} is article {article.id}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>
        <button>Go Back</button>
      </Link>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  };
};

export default Article;
