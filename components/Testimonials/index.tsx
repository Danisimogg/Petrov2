/* eslint-disable prettier/prettier */
import { FC } from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Anika from 'public/assets/Annika.jpg'
import Oleg from 'public/assets/Oleg.jpg'
import Kuo from 'public/assets/Kuo.jpg'
import Nicole from 'public/assets/Nicole.jpg'
import { useRouter } from 'next/router'

const Testimonials: FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en'
  const data = [
    {
      avatar: Nicole,
      name: 'Nicole L',
      position: 'Music Director/Producer',
      review: t
        ? 'Svyatoslav is a very imaginative man.He can give me many creative ideas!He also knows a lot about various games and he is always pleased to share something with me.I can learn a lot of interesting things when I work with him!'
        : 'スヴャトスラフはとても想像力豊かな人で、私にたくさんのクリエイティブなアイデアを与えてくれます！また、彼は様々なゲームについてよく知っていて、いつも喜んで何かを教えてくれます。彼と一緒に仕事をすると、たくさんの面白いことを学ぶことができますよ',
    },
    {
      avatar: Oleg,
      name: 'Oleg',
      position: 'Lead Producer',
      review: t
        ? 'Passionate and efficient, that’s how I would describe Svyatoslav. I had the pleasure of working with him on several projects, and he delivered exceptional results. I am always impressed by Svyatoslav’s ability to craft a fantastic soundscape for any game or experience.'
        : '情熱的で効率的、それがスヴャトスラフを表現する方法です。彼とはいくつかのプロジェクトで一緒に仕事をすることができましたが、非常に優れた結果を出してくれました。どんなゲームや体験にも素晴らしいサウンドスケープを作り上げるSvyatoslavの能力には、いつも感心させられます。',
    },
    {
      avatar: Anika,
      name: 'Annika Maar',
      position: 'CEO',
      review: t
        ? 'Working with Svyatoslav is always a blast! He knows exactly what we want from a piece and puts his own personal spin on it.'
        : 'スビアトスラブと一緒に制作するっていつも安心で楽しいです。個人性の込めたシーンにぴったりな音楽です。',
    },
    // \r\nスビアトスラブと一緒に制作するっていつも安心で楽しいです。個人性の込めたシーンにぴったりな音楽です。
    {
      avatar: Kuo,
      name: 'Kuo Yu',
      position: 'Music Director/Producer',

      review: t
        ? "Svyatoslav always brings his unique taste to our music. I love diving into the details with him cuz he's one of the most open minded composer."
        : 'Svyatoslavはいつも私たちの音楽に彼のユニークなテイストをもたらしてくれます。私は彼と一緒に細部にまで潜るのが好きなんだ。彼は最もオープンマインドな作曲家の一人だからね。',
    },
  ]
  return (
    <div style={{ zIndex: 99999 }}>
      <Carousel
        interval={7800}
        showStatus={true}
        showArrows={true}
        autoPlay
        swipeable
        useKeyboardArrows
        infiniteLoop
      >
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
    </div>
  )
}

export default Testimonials
