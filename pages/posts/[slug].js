import Layout from '../../components/Layout'
import { getPostSlugs, getPostBySlug } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export default function PostPage({ meta, mdxSource }) {
  return (
    <Layout>
      <h1 className="text-3xl font-mono">{meta.title}</h1>
      <div className="text-xs my-2">{meta.date} · {meta.read} min read</div>
      <div className="prose max-w-none">
        <MDXRemote {...mdxSource} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){
  const slugs = getPostSlugs().map(s => s.replace(/\.mdx$/, ''))
  return { paths: slugs.map(s => ({ params:{ slug:s } })), fallback:false }
}

export async function getStaticProps({ params }){
  const post = getPostBySlug(params.slug)
  const mdxSource = await serialize(post.content, {
    mdxOptions:{ remarkPlugins:[require('remark-gfm')] }
  })
  return { props:{ meta: post.meta, mdxSource } }
}