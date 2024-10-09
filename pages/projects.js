import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'

const Card = ({ title, description, imgSrc, href }) => {
  return (
    <div className="overflow-hidden rounded-lg border-2 border-[#4A90E2] bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:border-[#50E3C2] dark:bg-gray-800">
      <a href={href} aria-label={`Link to ${title}`} className="block h-full w-full">
        <img
          src={imgSrc}
          alt={`Project preview for ${title}`}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
        <div className="bg-[#F1F7FF] p-4 dark:bg-[#2C2C2C]">
          <h2 className="text-lg font-bold text-[#4A90E2] dark:text-[#50E3C2]">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </a>
    </div>
  )
}

// Main Projects Page
export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-[#4A90E2] dark:divide-[#50E3C2]">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div lassName="animate-text bg-gradient-to-r from-[#4A90E2] via-[#50E3C2] to-[#4A90E2] bg-clip-text text-transparent">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
              Projects
            </h1>
          </div>
          <p className="text-lg leading-7 text-gray-800 dark:text-gray-200">
            This is my project portfolio, please have a look!
          </p>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
