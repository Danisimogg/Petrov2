/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React, { FC } from 'react'
import s from './style/portfolio.module.css'
import { useRouter } from 'next/router'

const Portfolio: FC = () => {
  const router = useRouter()

  const { locale } = router

  const t = locale === 'en'
  return (
    <section id="portfolio">
      <div className="py-3" />
      <div className="bg-white py-3 sm:py-8 lg:py-12 rounded-md	 shadow-sm">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
              {t ? ' Projects i work on:' : ' プロジェット'}
            </h2>
            <p className="max-w-md text-center text-gray-400 lg:text-right">
              {t
                ? ' A lot of works on which I worked and working are under NDA, so for more information, don’t hesitate to contact me.'
                : ' 私が手がけた作品の多くは を、NDAの下で行っています。'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <span className="h-5  justify-between text-center  sm:h-8 ">
                <svg
                  className="h-6 w-auto sm:h-8"
                  width="200"
                  height="39"
                  viewBox="0 0 154 39"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text x="10" y="25" fontWeight={700} fontSize={16}>
                    World of Tanks blitz
                  </text>
                </svg>
              </span>
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <svg
                className="h-6 w-auto sm:h-8"
                width="200"
                height="39"
                viewBox="0 0 186 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="10" y="25" fontWeight={700} fontSize={16}>
                  King and the Great Hero
                </text>
              </svg>
            </div>

            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <svg
                className="h-6 w-auto sm:h-8"
                width="200"
                height="39"
                viewBox="0 0 173 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text fontWeight={700} fontSize={22} x="40" y="30">
                  Identity V
                </text>
              </svg>
            </div>

            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <svg
                className="h-6 w-auto sm:h-8"
                width="200"
                height="39"
                viewBox="0 0 146 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="10" y="25" fontWeight={700} fontSize={18}>
                  Kraken Academy!!
                </text>
              </svg>
            </div>

            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <svg
                className="h-6 w-auto sm:h-8"
                width="200"
                height="39"
                viewBox="0 0 151 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="10" y="25" fontWeight={700} fontSize={18}>
                  Lapis x Labyrinth
                </text>
              </svg>
            </div>

            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <svg
                className="h-6 w-auto sm:h-8"
                width="200"
                height="39"
                viewBox="0 0 160 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="10" y="25" fontWeight={700} fontSize={18}>
                  TELEPORT BATTLE VR
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
