export default function PostCard({ meta, excerpt, href }) {
  return (
    <article className="py-6">
      <h2 className="text-2xl underline decoration-2 decoration-black/80 font-mono">
        <a href={href}>{meta.title}</a>
      </h2>

      <div className="text-xs mt-1 mb-3">
        {meta.date} · {meta.read} min read
      </div>

      <div className="post-row">
        <img src="/images/logo.svg" className="post-thumb" alt="thumb"/>
        <p className="article-excerpt">{excerpt}</p>
      </div>

      <a className="underline" href={href}>Read more →</a>
      <div className="hr-dotted mt-4"></div>
    </article>
  )
}