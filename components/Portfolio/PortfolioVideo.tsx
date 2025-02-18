import React, { FC } from 'react'
import s from './style/portfolio.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

//1 - full music 2- no full music  3 and effects
const data = [
  {
    id: 1,
    title: 'Lapis x Labyrinth',
    image:
      '<iframe src="https://www.youtube.com/embed/mkxZxz2BqCs" title="ラピス・リ・アビス　プロモーションムービー" allowfullscreen></iframe>',
    fullMusic: 2,
    company: 'Nihon ichi software Japan',
    platforms: { ps4: true, psVita: true, nintendoSwitch: true },
    site: 'https://nisamerica.com/games/lapis-labyrinth/',
  },
  {
    id: 2,
    title: 'Liar princess and the blind prince',
    image:
      '<iframe src="https://www.youtube.com/embed/h9yPYXYkDxQ"allowfullscreen title="嘘つき姫と盲目王子　朗読ムービー"></iframe>',
    fullMusic: 2,
    company: 'Nihon ichi software Japan',
    platforms: { ps4: true, psVita: true, nintendoSwitch: true },
    site: 'https://nisamerica.com/games/the-liar-princess/',
  },
  {
    id: 3,
    title: 'Kraken Academy!!',
    image:
      '<iframe src="https://www.youtube.com/embed/1QxpadGmKd0" allowfullscreen title="Kraken Academy!! Steam Trailer"></iframe>',
    fullMusic: 1,
    company: 'Happy Broccoli Games',
    platforms: { steam: true, gog: true },
    site: 'https://www.kraken-academy.com/',
  },
  {
    id: 4,
    title: 'わるい王様とりっぱな勇者',
    image:
      '<iframe src="https://www.youtube.com/embed/SsquS78Q2jg" title="『わるい王様とりっぱな勇者』サウンドトラック試聴ムービー" allowfullscreen></iframe>',
    fullMusic: 2,
    company: 'Happy Broccoli Games',
    platforms: { nintendoSwitch: true, ps4: true, ps5: true },
    site: 'https://www.kraken-academy.com/',
  },
  {
    id: 5,
    title: 'Kraken Academy!! (Second Trailer)',
    image: '<iframe src="https://www.youtube.com/embed/dQs0QBBEDEU" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Happy Broccoli Games',
    platforms: { steam: true, gog: true },
    site: 'https://www.kraken-academy.com/',
  },
  {
    id: 6,
    title: 'Speed Crew - Official Nintendo Switch ',
    image: '<iframe src="https://www.youtube.com/embed/lN7IG9V8yk8" allowfullscreen></iframe>',
    fullMusic: 5,
    company: 'Wild Fields',
    platforms: { nintendoSwitch: true },
    site: 'https://wildfieldsgames.com/',
  },
  {
    id: 7,
    title: "A Cat's manor ",
    image: '<iframe src="https://www.youtube.com/embed/uz5LAZDBAto" allowfullscreen></iframe>',
    fullMusic: 2,
    company: 'Happiest Dark Corner',
    platforms: { steam: true },
    site: 'https://store.steampowered.com/app/667430/A_Cats_Manor/',
  },
  {
    id: 10,
    title: 'Odyssey Island (in development) ',
    image: '<iframe src="https://www.youtube.com/embed/QP9ui-TiNyY" allowfullscreen></iframe>',
    fullMusic: 1,
    platforms: { steam: true },
    company: 'Happy Broccoli Games',
    site: 'https://www.happybroccoligames.com/',
  },
  {
    id: 9,
    title: 'Seven Spheres (in development)',
    image: '<iframe src="https://www.youtube.com/embed/-Gz7oSZyGNI" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'GameGGOGGO',
    platforms: { ios: true, android: true },
    site: ' https://twitter.com/seven_sphere',
  },
  {
    id: 8,
    title: 'Kraken Academy - endroll music  by Petrov Svyatoslav',
    image: '<iframe src="https://www.youtube.com/embed/cw8Oxd0sjH0" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Happy Broccoli Games',
    site: 'https://www.kraken-academy.com/',
    platforms: { steam: true },
  },
  {
    id: 11,
    title: 'Duck Detective (in development)',
    image: '<iframe src="https://www.youtube.com/embed/X_NCNvQSXeM" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Happy Broccoli Games',
    site: 'https://www.kraken-academy.com/',
    platforms: { steam: true },
  },
  {
    id: 12,
    title: 'World of Tanks Blitz - Angar music',
    image: '<iframe src="https://www.youtube.com/embed/VdlTJFt1Ovw" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Wargaming',
    site: 'https://na.wotblitz.com/en/#/',
    platforms: { ios: true, android: true },
  },
  {
    id: 13,
    title: 'Into the Necrovale',
    image: '<iframe src="https://www.youtube.com/embed/PbkJ_F5ovm0" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Casey Clyde',
    site: 'https://store.steampowered.com/app/1717090/Into_the_Necrovale/',
    platforms: { steam: true },
  },
  {
    id: 14,
    title: 'Duck Detective - the secret salami',
    image: '<iframe src="https://www.youtube.com/embed/R4s-Pu0HXMo" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Happy Broccoli Games',
    site: 'https://www.happybroccoligames.com/',
    platforms: { steam: true, nintendoSwitch: true, gog: true, xbox: true },
  },
  {
    id: 15,
    title: 'Duck Detective - the secret salami',
    image: '<iframe src="https://www.youtube.com/embed/dmstMrXlVHI" allowfullscreen></iframe>',
    fullMusic: 3,
    company: 'Happy Broccoli Games',
    site: 'https://www.happybroccoligames.com/',
    platforms: { steam: true, nintendoSwitch: true, gog: true, xbox: true },
  },
  {
    id: 16,
    title: 'Swordhaven: Iron Conspiracy',
    image: '<iframe src="https://www.youtube.com/embed/WBEAV8_CvrE" allowfullscreen></iframe>',
    fullMusic: 4,
    company: 'Atom RPG',
    site: 'https://atomrpg.com/',
    platforms: { steam: true },
  },
  {
    id: 17,
    title: 'Duck Detective: the Ghost of Glamping',
    image: '<iframe src="https://www.youtube.com/embed/YSen3srIrHQ" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Happy Broccoli Games',
    site: 'https://www.happybroccoligames.com/',
    platforms: { steam: true },
  },
  // {
  //   id: 18,
  //   title: 'The Perfect Couple: Netflix Stories',
  //   image: '<iframe src="https://www.youtube.com/embed/xhFqpBiCIrs" allowfullscreen></iframe>',
  //   fullMusic: 5,
  //   company: 'Netflix',
  //   site: 'https://www.netflix.com/',
  //   platforms: { netflix: true, android: true, ios: true },
  // },
  // {
  //   id: 19,
  //   title: 'Outer Banks: Netflix Stories',
  //   image: '<iframe src="https://www.youtube.com/embed/0zQjyHkowbI" allowfullscreen></iframe>',
  //   fullMusic: 5,
  //   company: 'Netflix',
  //   site: 'https://www.netflix.com/',
  //   platforms: { netflix: true, android: true, ios: true },
  // },
  // {
  //   id: 20,
  //   title: 'Perfect Match: Netflix Stories',
  //   image: '<iframe src="https://www.youtube.com/embed/re-gfsLcFgQ" allowfullscreen></iframe>',
  //   fullMusic: 5,
  //   company: 'Netflix',
  //   site: 'https://www.netflix.com/',
  //   platforms: { netflix: true, android: true, ios: true },
  // },
  // {
  //   id: 21,
  //   title: 'Sweet Magnolias: Netflix Stories',
  //   image: '<iframe src="https://www.youtube.com/embed/RpGxm7vwIEM" allowfullscreen></iframe>',
  //   fullMusic: 5,
  //   company: 'Netflix',
  //   site: 'https://www.netflix.com/',
  //   platforms: { netflix: true, android: true, ios: true },
  // },
]

const PortfolioVideo: FC = () => {
  function createMarkup(html: string) {
    return { __html: html }
  }
  const router = useRouter()

  const { locale } = router

  const t = locale === 'en'
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
                    {fullMusic === 1
                      ? t
                        ? 'Music By Petrov Svyatoslav'
                        : ' 音楽制作 Petrov Svyatoslav'
                      : fullMusic === 2
                      ? t
                        ? 'Part of the music by Petrov Svyatoslav'
                        : '音楽の一部を担当いたしました'
                      : fullMusic === 3
                      ? t
                        ? 'FULL OST By Petrov Svyatoslav'
                        : '音楽制作 Petrov Svyatoslav'
                      : fullMusic === 4
                      ? t
                        ? 'Part of music, MENU music By Petrov Svyatoslav'
                        : '音楽制作一部 Petrov Svyatoslav'
                      : t
                      ? 'Music & SFX by Petrov Svyatoslav'
                      : '音楽制作、　SFX制作　Petrov Svyatoslav'}
                  </p>
                  <p className="mb-2 text-sm text-gray-600 font-bold">
                    {t ? 'Company Official Site:' : ' オフィシャルサイト。'}{' '}
                    <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <Link href={site}>{company}</Link>
                    </span>
                  </p>

                  <div className="flex flex-wrap gap-1">
                    <h4 className="text-sm text-gray-600 font-bold">
                      {t ? 'Platforms:' : ' ゲームプラットフォーム'}
                    </h4>
                    {platforms.steam && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Steam
                      </span>
                    )}
                    {/* {platforms.netflix && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Netflix
                      </span>
                    )} */}
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

                    {platforms.ios && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        IOS
                      </span>
                    )}

                    {platforms.xbox && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Xbox
                      </span>
                    )}

                    {platforms.android && (
                      <span className="flex flex-col justify-center items-center whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Android
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
