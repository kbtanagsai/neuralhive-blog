import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import { getAllPosts } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <Layout>
      <h1 className="text-3xl font-mono mb-2"># HI, MONDAY</h1>
      <p className="mb-6">[Insert short About section]</p>

      {posts.map((p) => (
        <PostCard
          key={p.slug}
          meta={p.meta}
          excerpt={p.meta.excerpt || p.content.slice(0, 150) + '...'}
          href={/posts/${p.slug}}
        />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}