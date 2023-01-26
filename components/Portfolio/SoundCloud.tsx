/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React, { FC, useState, useEffect, createRef } from 'react'
import loadscript from 'load-script'
import s from './style/portfolio.module.css'
import { useRouter } from 'next/router'

declare global {
  interface Window {
    SC?: any
  }
}

const SoundCloud: FC = () => {
  const router = useRouter()

  const { locale } = router

  const t = locale === 'en'
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
  )
}

export default SoundCloud
