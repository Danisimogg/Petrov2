/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React, { FC, useState, useEffect, createRef } from 'react'
import loadscript from 'load-script'
import s from './style/portfolio.module.css'
import PortfolioVideo from './PortfolioVideo'

declare global {
  interface Window {
    SC?: any
  }
}

const Portfolio: FC = () => {
  // used to communicate between SC widget and React
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlistIndex, setPlaylistIndex] = useState(0)

  // populated once SoundCloud Widget API is loaded and initialized
  const [player, setPlayer] = useState<any>(false)

  // ref for iframe element - https://reactjs.org/docs/refs-and-the-dom.html
  const iframeRef = createRef()

  // initialization - load soundcloud widget API and set SC event listeners

  useEffect(() => {
    // use load-script module to load SC Widget API
    loadscript('https://w.soundcloud.com/player/api.js', () => {
      // initialize player and store reference in state

      const player: any = window?.SC?.Widget(iframeRef.current) as any
      setPlayer(player)
      const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = window?.SC?.Widget.Events
      // NOTE: closures created - cannot access react state or props from within and SC callback functions!!
      player?.bind(PLAY, () => {
        // update state to playing
        setIsPlaying(true)

        // check to see if song has changed - if so update state with next index
        player?.getCurrentSoundIndex((playerPlaylistIndex: any) => {
          setPlaylistIndex(playerPlaylistIndex)
        })
      })

      player?.bind(PAUSE, () => {
        // update state if player has paused - must double check isPaused since false positives
        player?.isPaused((playerIsPaused: any) => {
          if (playerIsPaused) setIsPlaying(false)
        })
      })
    })
  }, [])

  // integration - update SC player based on new state (e.g. play button in React section was click)

  // adjust playback in SC player to match isPlaying state
  useEffect(() => {
    if (!player) return // player loaded async - make sure available

    player?.isPaused((playerIsPaused: any) => {
      if (isPlaying && playerIsPaused) {
        player?.play()
      } else if (!isPlaying && !playerIsPaused) {
        player?.pause()
      }
    })
  }, [isPlaying])

  // adjust seleted song in SC player playlist if playlistIndex state has changed
  useEffect(() => {
    if (!player) return // player loaded async - make sure available

    player?.getCurrentSoundIndex((playerPlaylistIndex: any) => {
      if (playerPlaylistIndex !== playlistIndex) player?.skip(playlistIndex)
    })
  }, [playlistIndex])

  return (
    <section id="portfolio">
      <PortfolioVideo />
      <div className="py-3" />
      <div className="bg-white py-3 sm:py-8 lg:py-12 rounded-md	 shadow-sm">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
              Projects i work on:
            </h2>

            <p className="max-w-md text-center text-gray-400 lg:text-right">
              A lot of works on which I worked and working are under NDA, so for more information,
              don’t hesitate to contact me.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
            <div className="flex h-36 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <span className="h-5  justify-between text-center  sm:h-8 ">
                <svg
                  className="h-6 w-auto sm:h-8"
                  width="200"
                  height="39"
                  viewBox="0 0 154 39"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 8V20L12 32H0V20L12 8H24Z" />
                  <text x="30" y="25" fontWeight={700} fontSize={16}>
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
                <text x="30" y="25" fontWeight={700} fontSize={16}>
                  King and the Great Hero
                </text>
                <path d="M0 31L24 7V31H0Z" />
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
                <rect x="30" y="26" width="24" height="5" />
                <rect x="30" y="17" width="15" height="5" />
                <text fontWeight={700} fontSize={22} x="65" y="30">
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
                <text x="30" y="25" fontWeight={700} fontSize={18}>
                  Kraken Academy!!
                </text>
                <path d="M16 6L29.8564 30H2.14359L16 6Z" />
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
                <text x="30" y="25" fontWeight={700} fontSize={18}>
                  Lapis x Labyrinth
                </text>
                <path d="M5.71591 8H0.136364L7.28409 19.6364L0 31.2727H5.63636L10.4091 23.3295H10.5909L15.3636 31.2727H21.0227L13.7614 19.6364L20.8636 8H15.3068L10.5909 15.9318H10.4091L5.71591 8Z" />
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
                <text x="20" y="25" fontWeight={700} fontSize={18}>
                  TELEPORT BATTLE VR
                </text>
                <circle cx="7" cy="20" r="7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${s.iframe}`}>
        <iframe
          ref={iframeRef as any}
          id="sound-cloud-player"
          scrolling="no"
          allow="autoplay"
          src={'https://w.soundcloud.com/player/?url=https://soundcloud.com/svyatoslav-petrov'}
        />
        <iframe
          ref={iframeRef as any}
          id="sound-cloud-player"
          scrolling="no"
          allow="autoplay"
          src={'https://w.soundcloud.com/player/?url=https://soundcloud.com/neversleepboy'}
        />
      </div>
    </section>
  )
}

export default Portfolio
