import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDir);

  const paths = filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      params: { slug: name.replace(".mdx", "") },
    }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "posts", ${params.slug}.mdx);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const processed = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);

  return {
    props: {
      frontmatter: data,
      contentHtml: processed.toString(),
    },
  };
}

export default function PostPage({ frontmatter, contentHtml }) {
  return (
    <Layout>
      <div className="prose lg:prose-xl mx-auto p-6">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </Layout>
  );
}