import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import BlogContainer from '../../components/blogs/BlogContainer';
import styles from '../../styles/pages/Blog.module.scss';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Blogs({ posts }) {
  return (
    <>
      <Head>
        <title>Blogs | Shubham Sharma</title>
        <meta
          name="description"
          content="Things learnt from experience and my thoughts on web development."
        />
        <meta property="og:title" content="Blogs | Shubham Sharma" />
        <meta
          property="og:description"
          content="Things learnt from experience and my thoughts on web development."
        />
        <meta property="og:url" content="https://www.shubhams.dev/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@shubhamku044" />
        <meta
          name="twitter:description"
          content="Things learnt from experience and my thoughts on web development."
        />
        <meta
          name="keywords"
          content="shubhamku044, shubham sharma, shubham kumar, shubham dev, shubhams, shubhams.dev"
        />
      </Head>
      <div className={styles.container}>
        <motion.h1
          initial={{ translateY: 30, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className={styles.container__heading}
        >
          Blog Posts
        </motion.h1>
        <BlogContainer posts={posts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.hashnode.com/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "shubhamku044") {
          publication {
            posts(page: 0) {
              _id
              coverImage
              slug
              title
              brief
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.user.publication.posts,
    },
  };
}
