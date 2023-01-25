import React, { FC } from 'react'
import s from './style/portfolio.module.css'
import Link from 'next/link'

const data = [
  {
    id: 1,
    title: 'Lapis x Labyrinth',
    image:
      '<iframe src="https://www.youtube.com/embed/mkxZxz2BqCs" title="ラピス・リ・アビス　プロモーションムービー" allowfullscreen></iframe>',
    fullMusic: false,
    company: 'Nihon ichi software Japan',
    platforms: { ps4: true, psVita: true, nintendoSwitch: true },
    site: 'https://nisamerica.com/games/lapis-labyrinth/',
  },
  {
    id: 2,
    title: 'Liar princess and the blind prince',
    image:
      '<iframe src="https://www.youtube.com/embed/h9yPYXYkDxQ"allowfullscreen title="嘘つき姫と盲目王子　朗読ムービー"></iframe>',
    fullMusic: false,
    company: 'Nihon ichi software Japan',
    platforms: { ps4: true, psVita: true, nintendoSwitch: true },
    site: 'https://nisamerica.com/games/the-liar-princess/',
  },
  {
    id: 3,
    title: 'Kraken Academy!!',
    image:
      '<iframe src="https://www.youtube.com/embed/1QxpadGmKd0" allowfullscreen title="Kraken Academy!! Steam Trailer"></iframe>',
    fullMusic: true,
    company: 'happy broccoli games',
    platforms: { steam: true, gog: true },
    site: 'https://www.kraken-academy.com/',
  },
  {
    id: 4,
    title: 'わるい王様とりっぱな勇者',
    image:
      '<iframe src="https://www.youtube.com/embed/SsquS78Q2jg" title="『わるい王様とりっぱな勇者』サウンドトラック試聴ムービー" allowfullscreen></iframe>',
    fullMusic: false,
    company: 'happy broccoli games',
    platforms: { nintendoSwitch: true, ps4: true, ps5: true },
    site: 'https://www.kraken-academy.com/',
  },
  {
    id: 5,
    title: 'Kraken Academy!! (Second Trailer)',
    image: '<iframe src="https://www.youtube.com/embed/dQs0QBBEDEU" allowfullscreen></iframe>',
    fullMusic: true,
    company: 'happy broccoli games',
    platforms: { steam: true, gog: true },
    site: 'https://www.kraken-academy.com/',
  },
]

const PortfolioVideo: FC = () => {
  function createMarkup(html: string) {
    return { __html: html }
  }

  return (
    <section id="portfolio">
      <div className={`container ${s.portfolio__container}`}>
        {data.map(({ id, image, title, platforms, site, company, fullMusic }) => {
          return (
            <article
              key={id}
              className="overflow-hidden rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="h-full rounded-[10px] bg-white sm:p-1">
                <span className="object-cover w-full h-48 rounded-xl">
                  <span dangerouslySetInnerHTML={createMarkup(image)} />
                </span>
                <p className="block p-2 text-sm text-gray-800 font-bold text-center">
                  <strong>{title} </strong>
                </p>
                <hr />

                <div className="p-3 sm:p-1">
                  <p className="mb-2 block  text-sm text-gray-600 font-bold">
                    {fullMusic
                      ? 'Music By Svyatoslav Petrov'
                      : 'Part of the music by Petrov Svyatoslav'}
                  </p>
                  <p className="mb-2 text-sm text-gray-600 font-bold">
                    Company Official Site:{' '}
                    <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <Link href={site}>{company}</Link>
                    </span>
                  </p>

                  <div className="flex flex-wrap gap-1">
                    <h4 className="text-sm text-gray-600 font-bold">Platforms:</h4>
                    {platforms.steam && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Steam
                      </span>
                    )}
                    {platforms.nintendoSwitch && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Nintendo Switch
                      </span>
                    )}
                    {platforms.ps5 && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        PS5
                      </span>
                    )}
                    {platforms.ps4 && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        PS4
                      </span>
                    )}
                    {platforms.psVita && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        PS Vita
                      </span>
                    )}

                    {platforms.gog && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        GoG
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PortfolioVideo
