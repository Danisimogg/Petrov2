export type WorkTile = {
  title: string
  description: string
}

export const workTiles: WorkTile[] = [
  {
    description: `Review from clients`,
    title: `Testimonials`,
  },
  {
    description: `Videos related to projects i work`,
    title: `Portfolio`,
  },
  {
    description: `A lot of works on which I worked and working are under NDA, so for more information, don’t hesitate to contact me.`,
    title: `Projects i work on:`,
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
