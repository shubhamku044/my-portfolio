import UnderDevelopment from '../../components/UnderDevelopment';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Blogs() {
  return (
    <div
      style={{
        minHeight: '100vh',
        color: 'white',
        paddingTop: '5rem',
      }}
    >
      <h1
        className=""
        style={{
          fontSize: '4rem',
          fontWeight: '600',
        }}
      >
        This is my blogs website
      </h1>
      <h2
        style={{
          fontSize: '2rem',
          cursor: 'pointer',
        }}
      >
        get data
      </h2>
      <div>
        {posts?.map((post, index) => {
          return (
            <div key={index}>
              <h4>{post.title}</h4>
            </div>
          );
        })}
      </div>
      <UnderDevelopment />
    </div>
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
        user(username: "chrisdevcode") {
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
