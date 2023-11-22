/* eslint-disable @next/next/no-html-link-for-pages */
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NowPlaying from '@/components/playing'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <div>
                <p className=" font-mono font-bold text-orange-700 dark:text-orange-600">
                  <NowPlaying />
                </p>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {/* Navbar */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Favorite Game
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://m.mobilelegends.com/" className="hover:underline">
                    Moble Legends
                  </a>
                </li>
                <li>
                  <a href="https://genshin.hoyoverse.com/id/" className="hover:underline">
                    Genshin Impact
                  </a>
                </li>
              </ul>
            </div>
            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://www.instagram.com/zyi.rifqi/" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/nanti" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Shorcut
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/projects" className="hover:underline">
                    Project
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{' '}
            <a href="/" className="hover:underline">
              {siteMetadata.author}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
