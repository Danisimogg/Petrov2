/* eslint-disable jsx-a11y/iframe-has-title */
import { ReactNode } from 'react'

import Testimonials from '../Testimonials'

export type WorkTile = {
  title: string
  description: string
  component?: ReactNode
}

export const workTiles: WorkTile[] = [
  {
    description: `Review from clients`,
    title: `Testimonials`,
    component: <Testimonials />,
  },
  // {
  //   description: 'I helped build',
  //   title: 'Aphex Field',
  //   image: {
  //     src: '/static/images/field-app.webp',
  //     width: 600,
  //     height: 554,
  //   },
  // },
  // {
  //   description: 'I helped maintain',
  //   title: 'Aphex Planner',
  //   image: {
  //     src: '/static/images/planner-app.webp',
  //     width: 600,
  //     height: 717,
  //   },
  // },
  // {
  //   description: `I'm currently building`,
  //   title: 'Aphex Publication',
  //   image: {
  //     src: '/static/images/publication-app.webp',
  //     width: 600,
  //     height: 717,
  //   },
  // },
]
