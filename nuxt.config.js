const path = require("path");
import Mode from 'frontmatter-markdown-loader/mode'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Rishi Jain is a software engineer with experience in Laravel, Jquery, Python, Perl and VueJS, who strives to build high quality websites and applications'
      }
    ],
    link: []
  },
  pwa: {
    icon: {
     /* icon options */
      iconFileName: 'pwa.png'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#64ffda' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/lazysizes.client.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    'nuxt-responsive-loader',
    '@nuxtjs/pwa'
  ],
  responsiveLoader: {
    name: 'images/[name]-[width].[ext]',
    sizes: [175, 350, 700, 1050, 1400, 3200],
    adapter: require('responsive-loader/sharp'),
    quality: 85
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      //add frontmatter-markdown-loader
      config.module.rules.push(
        {
          test: /\.md$/,
          include: path.resolve(__dirname, "content"),
          loader: "frontmatter-markdown-loader",
        }
      )
    }
  }
}
