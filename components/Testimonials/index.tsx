/* eslint-disable prettier/prettier */
import { FC } from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Anika from 'public/assets/Annika.jpg'
import Oleg from 'public/assets/Oleg.jpg'
import Kuo from 'public/assets/Kuo.jpg'
import Nicole from 'public/assets/Nicole.jpg'

const data = [
  {
    avatar: Nicole,
    name: 'Nicole L',
    position: 'Music Director/Producer',
    review:
      'Svyatoslav is a very imaginative man.He can give me many creative ideas!He also knows a lot about various games and he is always pleased to share something with me.I can learn a lot of interesting things when I work with him!',
  },
  {
    avatar: Oleg,
    name: 'Oleg',
    position: 'Lead Producer',
    review:
      'Passionate and efficient, that’s how I would describe Svyatoslav. I had the pleasure of working with him on several projects, and he delivered exceptional results. I am always impressed by Svyatoslav’s ability to craft a fantastic soundscape for any game or experience.',
  },
  {
    avatar: Anika,
    name: 'Annika Maar',
    position: 'CEO',
    review:
      'Working with Svyatoslav is always a blast! He knows exactly what we want from a piece and puts his own personal spin on it.',
  },
  // \r\nスビアトスラブと一緒に制作するっていつも安心で楽しいです。個人性の込めたシーンにぴったりな音楽です。
  {
    avatar: Kuo,
    name: 'Kuo Yu',
    position: 'Music Director/Producer',

    review:
      "Svyatoslav always brings his unique taste to our music. I love diving into the details with him cuz he's one of the most open minded composer.",
  },
]

const Testimonials: FC = () => (
  <Carousel showStatus={false} showArrows={false} autoPlay swipeable useKeyboardArrows infiniteLoop>
    {data.map(({ avatar, name, review }, index) => {
      return (
        <div className="rounded-lg bg-white p-8  mx-auto max-w-5xl px-4 py-8" key={name}>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <Image
              alt="Man"
              src={avatar}
              className="aspect-square w-full rounded-lg object-cover"
            />

            <blockquote className="sm:col-span-2">
              <p className="text-xl font-medium text-slate-500 dark:text-slate-400 sm:text-2xl">
                {review}
              </p>

              <cite className="mt-8 inline-flex items-center not-italic">
                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                <p className="text-sm uppercase text-slate-900 dark:text-white sm:ml-3">
                  <strong>{name}</strong>
                </p>
              </cite>
            </blockquote>
          </div>
        </div>
      )
    })}
  </Carousel>
)

export default Testimonials
