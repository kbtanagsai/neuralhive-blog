import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export function getPostSlugs(){
  return fs.readdirSync(postsDir).filter(fn => fn.endsWith('.mdx'))
}

export function getPostBySlug(slug){
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDir, ${realSlug}.mdx)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug: realSlug, meta:data, content }
}

export function getAllPosts(){
  return getPostSlugs().map(slug => getPostBySlug(slug)).sort((a,b)=> new Date(b.meta.date)-new Date(a.meta.date))
}