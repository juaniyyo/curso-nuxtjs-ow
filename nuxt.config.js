require('dotenv').config()
module.exports = {
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
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff0000' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
    env: {
      APIKEY: process.env.APIKEY,
      PPROJECT_ID: process.env.PROJECT_ID,
      AUTHDOMAIN: process.env.AUTHDOMAIN,
      DATABASE_URL: process.env.DATABASE_URL,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGEING_SENDER_ID: process.env.MESSAGEING_SENDER_ID,
      APP_ID: process.env.APP_ID
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    async routes() {
      let routesList = []
      try {
        const data = await db.collection('restaurants').get()
        const docs = await data.docs
        docs.map(doc => {
          const category = '/' + doc.data().category
          routesList.push(category)
          const route = '/' + doc.data().category + '/' + doc.data().slug
          routesList.push(route)
        })
        return routesList
      } catch (error) {
        console.log(error)
        return []
      }
    }
  }
}
