import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import type { Authors } from 'contentlayer/generated'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company } = content

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="pt-8">
        <div className="flex flex-col-reverse items-center justify-between mb-8 sm:flex-row sm:items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">{name}</h1>
            <h2 className="text-sm font-normal md:text-base">
              {occupation} <span className="font-semibold">{company}</span>
            </h2>
          </div>
          <div>
            <Image
              alt={name}
              height={130}
              width={130}
              src={avatar || ''}
              className="object-scale-down rounded-full grayscale"
            />
          </div>
        </div>
        <div className="text-sm md:text-lg text-justify pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          {children}
        </div>
        <div className="group relative">
          <button
            className="h-10 w-48 divide-gray-700 rounded
        bg-indigo-500 py-2 px-8  text-lg  text-white hover:bg-indigo-600 focus:outline-none dark:bg-violet-400 dark:text-gray-800 "
          >
            Download CV
          </button>
          <nav
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className="invisible absolute left-0 top-full w-48 rounded  border-gray-900 bg-gray-200 opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100 dark:bg-white"
          >
            <ul className="py-1">
              <li>
                <a
                  download
                  href="assets/Svyatoslav English Resume.pdf"
                  className="block px-4 py-2 text-indigo-600 hover:bg-gray-400 dark:text-indigo-500"
                >
                  Download CV [ENG]
                </a>
              </li>
              <li>
                <a
                  download
                  href="assets/Svyatoslav_Petrov_japanese_Resume.pdf"
                  className="block px-4 py-2 text-indigo-600 hover:bg-gray-400 dark:text-indigo-500"
                >
                  Download CV [JP]
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
