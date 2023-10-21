const siteMetadata = {
  title: 'Svyatoslav Petrov(composer & sound designer from video games)',
  author: 'Svyatoslav Petrov',
  headerTitle: 'petrov',
  description: 'Composer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://svyatoslavpetrov.com',
  siteRepo: 'https://svyatoslavpetrov.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'magicoctopusmusic@gmail.com',
  twitter: 'https://twitter.com/PetrovSvyatosl3',
  facebook: 'https://www.facebook.com/svyatoslav.petrov.composer',
  linkedin: 'https://www.linkedin.com/in/svyatoslav-petrov-2878891a4/',
  spotify: 'https://open.spotify.com/album/19xgbOBGPP8ARr1BIgGaCm',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
