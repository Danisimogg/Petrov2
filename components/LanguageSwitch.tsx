import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const LanguageSwitch = () => {
  const router = useRouter()

  const { locales, locale: activeLocale } = router
  const otherLocales = locales?.filter((locale) => locale !== activeLocale && locale !== 'default')

  // const t = locale === 'en' ? en : fr

  // const changeLanguage = (e: any) => {
  //   // const locale = e.target.value
  //   // router.push(router.pathname, router.asPath, { locale })
  //   console.log(locale)
  // }
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  const [mounted, setMounted] = useState(false)

  return (
    /* It's a fragment. */
    // <>
    //   {otherLocales?.map((locale) => {
    //     const { pathname, query, asPath } = router
    //     return (
    //       <span key={'locale-' + locale}>
    //         <Link href={{ pathname, query }} as={asPath} locale={locale}>
    //           {locale === 'en' ? 'English' : locale === 'ja' ? 'ja' : null}
    //         </Link>
    //       </span>
    //     )
    //   })}
    // </>
    <>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router
        return (
          <span key={'locale-' + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <motion.button
                id="theme-btn"
                aria-label="Change Language"
                type="button"
                className="w-8 h-8 p-1 ml-1 mr-1 rounded"
                whileTap={{
                  scale: 0.7,
                  rotate: 360,
                  transition: { duration: 0.2 },
                }}
                whileHover={{ scale: 1.2 }}
              >
                <svg
                  style={{ marginTop: '11.5px' }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-gray-900 dark:text-gray-100"
                >
                  {locale === 'en' ? (
                    <svg
                      style={{ marginTop: '5.5px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M0.0568182 9V0.272727H5.32386V1.21023H1.11364V4.15909H5.05114V5.09659H1.11364V8.0625H5.39205V9H0.0568182ZM14.1491 0.272727V9H13.1264L8.37074 2.14773H8.28551V9H7.22869V0.272727H8.25142L13.0241 7.14205H13.1094V0.272727H14.1491Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      style={{ marginTop: '5.5px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.39773 0.272727H5.45455V6.51136C5.45455 7.06818 5.35227 7.54119 5.14773 7.9304C4.94318 8.3196 4.65483 8.61506 4.28267 8.81676C3.91051 9.01847 3.47159 9.11932 2.96591 9.11932C2.48864 9.11932 2.06392 9.03267 1.69176 8.85938C1.3196 8.68324 1.02699 8.43324 0.81392 8.10938C0.600852 7.78551 0.494318 7.40057 0.494318 6.95455H1.53409C1.53409 7.2017 1.59517 7.41761 1.71733 7.60227C1.84233 7.78409 2.01278 7.92614 2.22869 8.02841C2.4446 8.13068 2.69034 8.18182 2.96591 8.18182C3.26989 8.18182 3.52841 8.1179 3.74148 7.99006C3.95455 7.86222 4.11648 7.67472 4.22727 7.42756C4.34091 7.17756 4.39773 6.87216 4.39773 6.51136V0.272727ZM7.9304 9H6.82244L10.027 0.272727H11.1179L14.3224 9H13.2145L10.6065 1.65341H10.5384L7.9304 9ZM8.33949 5.59091H12.8054V6.52841H8.33949V5.59091Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </svg>
              </motion.button>
            </Link>
          </span>
        )
      })}
    </>
  )
}

export default LanguageSwitch
