import { useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import { ScrollContext } from '../ScrollObserver'

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber

  if (progress >= 0 && progress < 1) {
    return 1
  }

  return 0.2
}

export default function Intro() {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const { locale } = router

  const t = locale === 'en'
  const numOfPages = 3
  let progress = 0
  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black dark:bg-white text-white  dark:text-black"
      id="intro"
    >
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-3 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div className="introText" style={{ opacity: opacityForBlock(progress, 0) }}>
            {t ? 'I love to write music' : '音楽を作るのが好き。'}
          </div>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            {t
              ? '{Passionate about creating music that engages and inspires people.'
              : '人々を魅了し、感動させる音楽を創り出すことに情熱を注いでいます。'}
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            {t
              ? `Constantly striving to improve my craft and push the boundaries of what is possible with music.`
              : '常に自分の技術を向上させ、音楽で可能なことの限界を押し広げようと努力しています。'}
          </span>
        </div>
      </div>
    </div>
  )
}
