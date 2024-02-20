/* eslint-disable jsx-a11y/iframe-has-title */
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro/Intro'
import SectionContainer from '@/components/SectionContainer'
import { PageSEO } from '@/components/SEO'
import Works from '@/components/Work/Works'
import siteMetadata from '@/data/siteMetadata'
import HomeLayout from '@/layouts/HomeLayout'
import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'
import PortfolioVideo from '@/components/Portfolio/PortfolioVideo'
import SoundCloud from '@/components/Portfolio/SoundCloud'
import Companies from '@/components/Companies'

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.author} description={siteMetadata.description} />
      <SectionContainer>
        <Header />
      </SectionContainer>
      <Hero />
      <Intro />
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-3 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <iframe
          style={{ height: '44vh' }}
          className="h-full w-full rounded-lg"
          src="https://www.youtube.com/embed/hOx0nE6QMnA?autoplay=1&mute=0"
          allowFullScreen
        ></iframe>{' '}
      </div>
      <div className="flex flex-col justify-evenly pt-6 md:pt-9 max-w-4xl px-4 mx-auto sm:px-9 xl:max-w-6xl xl:px-0">
        <PortfolioVideo />
        <SoundCloud />
        <div className="pb-6 md:pb-9" />
      </div>
      <Works />
      <HomeLayout>
        <>
          <Companies />
          <div className="py-3" />
          <Contact />
        </>
      </HomeLayout>
    </>
  )
}
