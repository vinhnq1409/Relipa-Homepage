const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const webpack = require('webpack')
const path = require('path')

module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
  images: {
    disableStaticImages: true
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL
  },
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'en',
    localeDetection: false
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        // API return file sitemap.xml
        destination: process.env.SITEMAP_URL  || 'http://10.1.4.246/storage/368/sitemap-0.xml',
      },
    ]
  },
})
