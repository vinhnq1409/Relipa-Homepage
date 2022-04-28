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
  }
})
