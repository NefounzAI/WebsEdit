/* eslint-disable prettier/prettier */
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="bg-gradient-to-r from-white via-blue-600 to-white py-12 dark:bg-black dark:from-black dark:via-blue-600 dark:to-black">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0">
          <div className="flex-shrink-0 md:mr-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full border-4 border-white dark:border-gray-800"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold leading-10 text-white dark:text-gray-100">{name}</h3>
            <div className="text-xl text-black dark:text-black">{occupation}</div>
            <div className="text-lg text-black">{company}</div>
            <div className="flex justify-center space-x-3 pt-6 md:justify-start">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
        </div>
      </div>
      <div className="container prose prose-lg mx-auto mt-8 text-black dark:prose-dark">
        {children}
      </div>
    </>
  )
}
