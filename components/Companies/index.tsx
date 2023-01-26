/* eslint-disable prettier/prettier */
import React, { FC } from 'react'
import Image from '../Image'
import Kraken from 'public/assets/kraken.png'
import Miug from 'public/assets/miug.png'
import Nix from 'public/assets/nix.png'
import Wargeiming from 'public/assets/wargaming-net.png'
import { useRouter } from 'next/router'

const Companies: FC = () => {
  const router = useRouter()

  const { locale } = router

  const t = locale === 'en'
  return (
    <section className="mb-32 text-center text-gray-800" id="companies">
      <div className="px-6 py-12 md:px-12">
        <div className="container mx-auto">
          <div className="flex grid items-center lg:grid-cols-2">
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div
                className="block rounded-lg bg-white p-8 px-6 py-12 shadow-lg dark:bg-slate-800  md:px-12 lg:-mr-14"
                style={{
                  backdropFilter: 'blur(30px)',
                }}
              >
                <h2 className="md:text-2xl mb-12 font-bold uppercase text-slate-900 dark:text-white sm:ml-3">
                  {t ? ' Trusted by the best companies' : ' 信頼をされている会社'}
                  <br />
                  <span className="">{t ? ' around the world' : ' せかいじゅう'}</span>
                </h2>
                <div className="grid gap-x-6 md:grid-cols-2">
                  <div className="mb-12">
                    <Image src={Wargeiming} className="px-6 grayscale" alt="Wargeiming" />
                  </div>

                  <div className="mb-12">
                    <Image src={Kraken} className="px-6 grayscale" alt="Kraken" />
                  </div>

                  <div className="mb-12 md:mb-0">
                    <Image src={Miug} className="px-6 grayscale" alt="Miug" />
                  </div>

                  <div className="">
                    <Image src={Nix} className="px-6 grayscale" alt="Nix" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0">
              <img
                src="https://mdbootstrap.com/img/new/textures/full/166.jpg"
                className="w-full rounded-lg shadow-lg"
                alt="planet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
