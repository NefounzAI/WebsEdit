/* eslint-disable prettier/prettier */
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <main className="bg-gradient-to-br from-indigo-600 to-purple-800 py-16 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:space-x-10">
          <div className="mb-6 flex-shrink-0 md:mb-0 md:w-1/4">
            <Image
              src={avatar}
              alt={`${name}'s profile picture`}
              width={200}
              height={200}
              className="transform rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110 dark:border-gray-800"
            />
          </div>
          <div className="text-center md:w-3/4 md:text-left">
            <h1 className="text-4xl font-extrabold text-white dark:text-gray-100">{name}</h1>
            <h2 className="text-xl text-gray-300 dark:text-gray-400">{occupation}</h2>
            <p className="mb-4 text-lg text-gray-200 dark:text-gray-500">{company}</p>
            <div className="flex justify-center space-x-5 md:justify-start">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
        </div>
      </main>
      <section className="container prose prose-lg mx-auto mt-10 text-gray-900 dark:prose-dark">
        {children}
      </section>
    </>
  )
}
