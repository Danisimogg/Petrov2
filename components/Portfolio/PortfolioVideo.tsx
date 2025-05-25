import React, { FC, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Platform {
  steam?: boolean
  netflix?: boolean
  nintendoSwitch?: boolean
  ps5?: boolean
  ps4?: boolean
  psVita?: boolean
  gog?: boolean
  ios?: boolean
  xbox?: boolean
  android?: boolean
}

interface GameData {
  id: number
  title: string
  image: string
  fullMusic: number
  company: string
  platforms: Platform
  site: string
  thumbnail?: string
}

// Extract YouTube video ID from iframe
const extractYouTubeId = (iframe: string): string => {
  const match = iframe.match(/embed\/([a-zA-Z0-9_-]+)/)
  return match ? match[1] : ''
}

// Generate multiple thumbnail URLs from YouTube video ID for fallback
const getYouTubeThumbnails = (videoId: string) => {
  return {
    maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    high: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    standard: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    default: `https://img.youtube.com/vi/${videoId}/default.jpg`,
  }
}

// Get the best available thumbnail
const getYouTubeThumbnail = (videoId: string): string => {
  return getYouTubeThumbnails(videoId).maxres
}

// Alternative method: Check if video exists using oEmbed API (optional)
const checkVideoExists = async (videoId: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    )
    return response.ok
  } catch {
    return false
  }
}

const data: GameData[] = [
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
      '<iframe src="https://www.youtube.com/embed/h9yPYXYkDxQ" allowfullscreen title="嘘つき姫と盲目王子　朗読ムービー"></iframe>',
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
    title: 'Speed Crew - Official Nintendo Switch',
    image: '<iframe src="https://www.youtube.com/embed/lN7IG9V8yk8" allowfullscreen></iframe>',
    fullMusic: 5,
    company: 'Wild Fields',
    platforms: { nintendoSwitch: true },
    site: 'https://wildfieldsgames.com/',
  },
  {
    id: 7,
    title: "A Cat's manor",
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
    title: 'Duck Detective - the secret salami (OST)',
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
  {
    id: 18,
    title: 'Folklands',
    image: '<iframe src="https://www.youtube.com/embed/QLPO-HfzJzA" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Light Up Games',
    site: 'https://store.steampowered.com/developer/LightUpGames',
    platforms: { steam: true },
  },
  {
    id: 19,
    title: 'Cozy Keep',
    image: '<iframe src="https://www.youtube.com/embed/ZuORIkhtwiE" allowfullscreen></iframe>',
    fullMusic: 1,
    company: 'Unbossed Games',
    site: 'https://store.steampowered.com/app/2261350/Cozy_Keep_Farm_Craft_Manage/',
    platforms: { steam: true },
  },
  {
    id: 20,
    title: 'The Perfect Couple: Netflix Stories',
    image: '<iframe src="https://www.youtube.com/embed/xhFqpBiCIrs" allowfullscreen></iframe>',
    fullMusic: 5,
    company: 'Netflix',
    site: 'https://www.netflix.com/',
    platforms: { netflix: true, android: true, ios: true },
  },
  {
    id: 21,
    title: 'Outer Banks: Netflix Stories',
    image: '<iframe src="https://www.youtube.com/embed/0zQjyHkowbI" allowfullscreen></iframe>',
    fullMusic: 5,
    company: 'Netflix',
    site: 'https://www.netflix.com/',
    platforms: { netflix: true, android: true, ios: true },
  },
  {
    id: 22,
    title: 'Perfect Match: Netflix Stories',
    image: '<iframe src="https://www.youtube.com/embed/re-gfsLcFgQ" allowfullscreen></iframe>',
    fullMusic: 5,
    company: 'Netflix',
    site: 'https://www.netflix.com/',
    platforms: { netflix: true, android: true, ios: true },
  },
  {
    id: 23,
    title: 'Sweet Magnolias: Netflix Stories',
    image: '<iframe src="https://www.youtube.com/embed/RpGxm7vwIEM" allowfullscreen></iframe>',
    fullMusic: 5,
    company: 'Netflix',
    site: 'https://www.netflix.com/',
    platforms: { netflix: true, android: true, ios: true },
  },
  {
    id: 24,
    title: 'Duck Detective - the secret salami',
    image:
      '<iframe src="https://www.youtube.com/embed/4qy-nlNwF2o?si=LmL-okoZmxWXe6iP" allowfullscreen></iframe>',
    fullMusic: 5,
    company: 'Happy Broccoli Games',
    site: 'https://www.happybroccoligames.com/',
    platforms: { steam: true, nintendoSwitch: true, gog: true, xbox: true, ps5: true },
  },
]

interface GameCardProps {
  game: GameData
  isFlipped: boolean
  onFlip: () => void
  onClickOutside: () => void
  locale: string
}

const GameCard: FC<GameCardProps> = ({ game, isFlipped, onFlip, onClickOutside, locale }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [thumbnailSrc, setThumbnailSrc] = useState('')
  const [thumbnailError, setThumbnailError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const videoId = extractYouTubeId(game.image)
  const thumbnails = getYouTubeThumbnails(videoId)
  const t = locale === 'en'

  // Initialize thumbnail source
  useEffect(() => {
    if (videoId) {
      setThumbnailSrc(thumbnails.maxres)
      setThumbnailError(false)
    }
  }, [videoId, thumbnails.maxres])

  // Handle thumbnail loading errors with fallback
  const handleThumbnailError = () => {
    if (thumbnailSrc === thumbnails.maxres) {
      setThumbnailSrc(thumbnails.high)
    } else if (thumbnailSrc === thumbnails.high) {
      setThumbnailSrc(thumbnails.medium)
    } else if (thumbnailSrc === thumbnails.medium) {
      setThumbnailSrc(thumbnails.standard)
    } else if (thumbnailSrc === thumbnails.standard) {
      setThumbnailSrc(thumbnails.default)
    } else {
      setThumbnailError(true)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node) && isFlipped) {
        onClickOutside()
        setIsVideoLoaded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isFlipped, onClickOutside])

  useEffect(() => {
    if (isFlipped) {
      setIsAnimating(true)
      // Delay showing video for smooth animation
      setTimeout(() => {
        setShowVideo(true)
        setTimeout(() => {
          setIsVideoLoaded(true)
        }, 100)
      }, 200)
    } else {
      setShowVideo(false)
      setIsVideoLoaded(false)
      setTimeout(() => {
        setIsAnimating(false)
      }, 200)
    }
  }, [isFlipped])

  const getMusicAttribution = (fullMusic: number) => {
    switch (fullMusic) {
      case 1:
        return t ? 'Music By Petrov Svyatoslav' : '音楽制作 Petrov Svyatoslav'
      case 2:
        return t ? 'Part of the music by Petrov Svyatoslav' : '音楽の一部を担当いたしました'
      case 3:
        return t ? 'FULL OST By Petrov Svyatoslav' : '音楽制作 Petrov Svyatoslav'
      case 4:
        return t
          ? 'Part of music, MENU music By Petrov Svyatoslav'
          : '音楽制作一部 Petrov Svyatoslav'
      default:
        return t ? 'Music & SFX by Petrov Svyatoslav' : '音楽制作、　SFX制作　Petrov Svyatoslav'
    }
  }

  const renderPlatforms = () => {
    const platformList: JSX.Element[] = []
    const platformConfig = [
      { key: 'steam', label: 'Steam', color: 'from-blue-100 to-blue-200 text-blue-800' },
      { key: 'netflix', label: 'Netflix', color: 'from-red-100 to-red-200 text-red-800' },
      { key: 'nintendoSwitch', label: 'Switch', color: 'from-red-100 to-orange-200 text-red-800' },
      { key: 'ps5', label: 'PS5', color: 'from-indigo-100 to-indigo-200 text-indigo-800' },
      { key: 'ps4', label: 'PS4', color: 'from-blue-100 to-indigo-200 text-blue-800' },
      { key: 'psVita', label: 'PS Vita', color: 'from-purple-100 to-purple-200 text-purple-800' },
      { key: 'gog', label: 'GOG', color: 'from-purple-100 to-pink-200 text-purple-800' },
      { key: 'ios', label: 'iOS', color: 'from-gray-100 to-gray-200 text-gray-800' },
      { key: 'xbox', label: 'Xbox', color: 'from-green-100 to-green-200 text-green-800' },
      { key: 'android', label: 'Android', color: 'from-green-100 to-lime-200 text-green-800' },
    ]

    platformConfig.forEach(({ key, label, color }) => {
      if (game.platforms[key as keyof Platform]) {
        platformList.push(
          <span
            key={key}
            className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs font-bold bg-gradient-to-r ${color} border shadow-sm transition-all duration-200 hover:scale-105`}
          >
            {label}
          </span>
        )
      }
    })

    return platformList
  }

  const handleWatchTrailer = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isAnimating) {
      onFlip()
    }
  }

  const handleCloseVideo = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowVideo(false)
    setIsVideoLoaded(false)
    onFlip()
  }

  if (isFlipped) {
    return (
      <div
        ref={cardRef}
        className={`relative w-full h-[480px] sm:h-[520px] lg:h-[560px] bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transform transition-all duration-500 ease-out ${
          isAnimating ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          animation: isAnimating ? 'flipIn 0.6s ease-out' : undefined,
        }}
      >
        <div className="relative w-full h-full" style={{ pointerEvents: 'auto' }}>
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90 animate-pulse" />

          {showVideo && isVideoLoaded && videoId && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&fs=1`}
              title={game.title}
              className="w-full h-full relative z-10 transition-opacity duration-500 ease-in-out opacity-100"
              allowFullScreen
              allow="autoplay; encrypted-media; fullscreen"
              frameBorder="0"
            />
          )}

          {/* Enhanced Loading State */}
          {(!showVideo || !isVideoLoaded) && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black z-20">
              <div className="text-center">
                <div className="relative">
                  <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
                  <div className="animate-ping absolute inset-0 rounded-full h-12 w-12 sm:h-16 sm:w-16 border-2 border-purple-300 mx-auto"></div>
                </div>
                <p className="text-white text-base sm:text-lg font-medium animate-pulse">
                  Loading video...
                </p>
                <div className="mt-2 flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Close Button */}
          <button
            onClick={handleCloseVideo}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/80 hover:bg-red-600 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-white/50 hover:scale-110 active:scale-95 backdrop-blur-sm group"
            title="Close video"
            aria-label="Close video"
            style={{ pointerEvents: 'auto' }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Enhanced Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-6 transform transition-all duration-500 translate-y-0 opacity-100">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2 animate-slideInUp">
              {game.title}
            </h3>
            <p
              className="text-gray-300 text-xs sm:text-sm animate-slideInUp"
              style={{ animationDelay: '0.1s' }}
            >
              {getMusicAttribution(game.fullMusic)}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      className="relative w-full h-[480px] sm:h-[520px] lg:h-[560px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border overflow-hidden transition-all duration-500 ease-out ${
          isHovered
            ? 'shadow-2xl sm:shadow-3xl -translate-y-3 sm:-translate-y-4 scale-[1.02] sm:scale-[1.03] border-purple-200'
            : 'shadow-lg sm:shadow-xl translate-y-0 scale-100 border-gray-100'
        }`}
        style={{
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(147, 51, 234, 0.1)'
            : undefined,
        }}
      >
        {/* Subtle shimmer effect when not hovered */}
        {!isHovered && (
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div
              className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ animationDuration: '3s' }}
            />
          </div>
        )}
        {/* Thumbnail Section - Clickable */}
        <div
          className="relative h-40 sm:h-44 lg:h-48 overflow-hidden cursor-pointer group/thumbnail"
          onClick={handleWatchTrailer}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleWatchTrailer(e as any)
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`Watch trailer for ${game.title}`}
        >
          {!thumbnailError ? (
            <Image
              src={thumbnailSrc}
              alt={game.title}
              fill
              className={`object-cover transition-all duration-700 ease-out ${'scale-110 brightness-110 contrast-110'}`}
              onError={() => handleThumbnailError()}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <div className="bg-white/10 rounded-full p-3 mb-3 mx-auto w-fit">
                  <svg className="w-8 h-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm font-medium line-clamp-2">{game.title}</p>
                <p className="text-xs text-gray-300 mt-1">Video Preview</p>
              </div>
            </div>
          )}

          {/* Enhanced Gradient Overlay */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isHovered
                ? 'bg-gradient-to-t from-black/70 via-purple-900/30 to-transparent'
                : 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'
            }`}
          />

          {/* Enhanced Music Attribution Badge */}
          <div
            className={`absolute top-2 sm:top-4 left-2 sm:left-4 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 transition-all duration-500 ${
              isHovered ? 'bg-white/95 scale-105 shadow-lg' : 'bg-white/90 scale-100'
            }`}
          >
            <p
              className={`text-xs font-bold transition-colors duration-300 ${
                isHovered ? 'text-purple-800' : 'text-purple-700'
              }`}
            >
              {game.fullMusic === 1
                ? '🎵 Full OST'
                : game.fullMusic === 2
                ? '🎼 Partial'
                : game.fullMusic === 3
                ? '🎵 Complete OST'
                : game.fullMusic === 4
                ? '🎼 Menu Music'
                : '🎵 Music & SFX'}
            </p>
          </div>

          {/* Mobile Tap Hint */}
          <div className="absolute bottom-2 right-2 sm:hidden bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
            <p className="text-xs text-white font-medium">Tap to play</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 lg:p-6 h-[calc(100%-10rem)] sm:h-[calc(100%-11rem)] lg:h-[calc(100%-12rem)] flex flex-col">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-tight">
            {game.title}
          </h3>

          {/* Music Attribution */}
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-lg p-2.5 sm:p-3 mb-2 sm:mb-3 border border-purple-100">
            <p className="text-xs font-semibold text-purple-800">
              {getMusicAttribution(game.fullMusic)}
            </p>
          </div>

          {/* Company Info */}
          <div className="mb-2 sm:mb-3">
            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-bold">
              {t ? 'Developer' : '開発会社'}
            </p>
            <Link
              href={game.site}
              className="text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors hover:underline decoration-2 underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {game.company}
            </Link>
          </div>

          {/* Platforms */}
          <div className="mb-3 sm:mb-4 flex-grow">
            <p className="text-xs text-gray-500 mb-1.5 sm:mb-2 uppercase tracking-wider font-bold">
              {t ? 'Available On' : 'プラットフォーム'}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">{renderPlatforms()}</div>
          </div>

          {/* Enhanced Watch Trailer Button */}
          <button
            onClick={handleWatchTrailer}
            disabled={isAnimating}
            className={`w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base transition-all duration-500 transform focus:outline-none focus:ring-2 focus:ring-purple-400 group relative overflow-hidden ${
              isAnimating
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : isHovered
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-105 shadow-lg'
                : 'bg-black text-white hover:bg-gray-800 active:scale-95'
            }`}
          >
            {/* Button Background Animation */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 transition-transform duration-500 ${
                isHovered ? 'translate-x-0' : '-translate-x-full'
              }`}
            />

            <span className="relative flex items-center justify-center gap-2">
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              {t ? 'Watch' : 'トレーラ'}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

const PortfolioVideo: FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en'

  const displayedGames = showAll ? data : data.slice(0, 6)

  const handleCardFlip = (cardId: number) => {
    setFlippedCard(flippedCard === cardId ? null : cardId)
  }

  const handleClickOutside = () => {
    setFlippedCard(null)
  }

  const handleShowLess = () => {
    setShowAll(false)
    setFlippedCard(null) // Reset any flipped cards when showing less
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {displayedGames.map((game, index) => (
            <div
              key={game.id}
              className="animate-slideInUp"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <GameCard
                game={game}
                isFlipped={flippedCard === game.id}
                onFlip={() => handleCardFlip(game.id)}
                onClickOutside={handleClickOutside}
                locale={locale || 'en'}
              />
            </div>
          ))}
        </div>

        {!showAll && data.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 hover:border-purple-300 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="relative">
                  {t ? `View More (${data.length - 6} more)` : `もっと見る (${data.length - 6}つ)`}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded" />
                </span>
              </span>
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center animate-slideInUp">
            <button
              onClick={handleShowLess}
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:border-gray-400 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                <span className="relative">
                  {t ? 'Show Less' : '少なく表示'}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded" />
                </span>
              </span>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes flipIn {
          0% {
            transform: perspective(1000px) rotateY(-90deg) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: perspective(1000px) rotateY(-45deg) scale(0.9);
            opacity: 0.5;
          }
          100% {
            transform: perspective(1000px) rotateY(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  )
}

export default PortfolioVideo
