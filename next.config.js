const { withContentlayer } = require('next-contentlayer')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withContentlayer(
  withBundleAnalyzer({
    i18n: {
      locales: ['en', 'ja'],
      defaultLocale: 'ja',
    },
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
    },
    images: {
      domains: ['img.youtube.com', 'via.placeholder.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.youtube.com',
          port: '',
          pathname: '/vi/**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
)
