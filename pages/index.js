/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import Typed from '@/components/typed.js'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { useEffect } from 'react'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    })
    document.querySelectorAll('.post-card').forEach((card) => observer.observe(card))
  }, [])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <header className="bg-light-gray dark:bg-dark-gray">
        <div className="divide-y divide-gray-300 py-6 dark:divide-gray-600">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <div
              className="animate-text bg-gradient-to-r 
              from-[#4A90E2] via-[#50E3C2] to-[#4A90E2]
              bg-clip-text text-transparent"
            >
              <h1 className="tracking-tightest my-28 select-none text-7xl font-extrabold leading-none sm:my-10 sm:text-6xl">
                Zyiii.Rifqi
              </h1>
            </div>
            <p className="text-lg leading-7 text-gray-800 dark:text-gray-200">
              <Typed /> <br />
              {siteMetadata.description}
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex transform items-center justify-center rounded-lg bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Recent Posts:</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {!posts.length && <li>No posts found.</li>}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, tags } = frontMatter
            return (
              <div
                key={slug}
                className="post-card rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
              >
                <article className="space-y-2">
                  <h2 className="text-xl font-bold leading-tight">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-gray-900 hover:text-[#005BB5] dark:text-gray-100 dark:hover:text-[#60A5FA]"
                    >
                      {title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </p>
                  <div className="mt-2 flex flex-wrap">
                    {tags && tags.map((tag) => <Tag key={tag} text={tag} />)}
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </main>

      <button className="fixed bottom-10 right-10 rounded-full bg-blue-500 p-3 text-white transition-all duration-300 hover:bg-blue-600">
        ↑
      </button>
    </>
  )
}
