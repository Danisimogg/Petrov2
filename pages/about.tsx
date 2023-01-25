import { MDXLayoutRenderer } from '@/components/MDXComponents'
import MainLayout from '@/layouts/MainLayout'
import { allAuthors } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

const DEFAULT_LAYOUT = 'AuthorLayout'

export const getStaticProps = async () => {
  // const author = allAuthors.find((p) => p.slug === 'default_en')
  // return { props: { author } }

  const author = allAuthors.find((p) => p.slug === 'default_en')
  const jaAuthor = allAuthors.find((p) => p.slug === 'default_ja')
  return { props: { author, jaAuthor } }
}
export default function About({
  author,
  jaAuthor,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  const { locale } = router

  const t = locale === 'en' ? author : jaAuthor
  return (
    <MainLayout>
      {author && <MDXLayoutRenderer layout={DEFAULT_LAYOUT} content={t as any} />}
    </MainLayout>
  )
}
