import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="mx-auto flex w-full max-w-md items-center justify-between px-4 sm:px-4 sm:py-2 md:max-w-3xl md:px-0 xl:max-w-2xl xl:px-0">
          <div className="mt-5 flex w-full items-center justify-between text-base leading-5">
            <div className="hidden text-lg sm:block sm:space-x-8">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="mt-0 rounded-lg p-1 font-medium text-gray-500 transition-all hover:scale-125 hover:bg-yellow-400 hover:text-black dark:text-gray-400 dark:hover:text-white sm:px-3 sm:py-2 md:inline-block"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
