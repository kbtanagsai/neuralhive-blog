export default function Nav(){
  return (
    <nav className="flex gap-6 text-sm">
      <a className="underline" href="/">Home</a>
      <a className="underline" href="/about">About</a>
      <a className="underline" href="/posts">Posts</a>
    </nav>
  )
}