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
      {/* <Intro /> */}
      <Works />
      <HomeLayout>
        <>
          <Companies />
          <div className="py-3" />
          <Portfolio />
          <Contact />
        </>
      </HomeLayout>
    </>
  )
}
