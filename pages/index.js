/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import Typed from '@/components/typed.js'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-blue-800 dark:divide-blue-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div
            className="animate-text bg-gradient-to-r 
            from-[#24b3ec] via-[#23c61a]  to-[#0d86ab]
            bg-clip-text
            text-transparent"
          >
            <h1 className="tracking-tightest my-28 select-none text-7xl font-extrabold leading-none sm:my-10 sm:text-6xl">
              Zyii.Rifqii
            </h1>
          </div>
          <p className="text-lg leading-7 text-black dark:text-white">
            <Typed /> <br />
            {siteMetadata.description}
          </p>
          <div>
            <a
              href="/about"
              className="me-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
              More >
            </a>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Recent Posts:</h1>
        <ul className="divide-y divide-cyan-500 dark:divide-cyan-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="space-y-5 xl:col-span-3">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <dl>
                            <dd className="text-base font-medium leading-6 text-cyan-500 dark:text-cyan-400">
                              <time dateTime={date}>{formatDate(date)}</time>
                            </dd>
                          </dl>
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags && tags.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
