import EventService from './services/EventService.js'
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
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/mathquill.css' }
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML',
        async: true,
        type: 'text/javascript'
      },
      {
        type: 'text/x-mathjax-config',
        innerHTML:
          'MathJax.Hub.Config({tex2jax: { inlineMath: [["$", "$"]] },TeX: {extensions: ["mhchem.js"]},CommonHTML: {scale: 100}})'
      },
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'
      },
      { src: '/mathquill.min.js' },
      { innerhtml: 'let MQ = MathQuill.getInterface(2)' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#39b982' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes: () => {
      return EventService.getEvents().then((response) => {
        return response.data.map((event) => {
          return '/event/' + event.id
        })
      })
    }
  }
}
