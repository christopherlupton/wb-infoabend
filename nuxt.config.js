import groups from './data/groups';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Weitblick Infoveranstaltung' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Weitblick Infoveranstaltung' },
      { name: 'description', content: 'Informationen zur Infoveranstaltung von Weitblick Münster' },
      { name: 'og:locale', content: 'de_DE' },
      { name: 'og:url', content: 'https://muenster.weitblicker.live' },
      { name: 'og:title', content: 'Weitblick Infoveranstaltung' },
      { name: 'og:description', content: 'Informationen zur Infoveranstaltung von Weitblick Münster' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-96x96.png' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/main.scss',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80,
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  generate: {
    routes() {
      const groupRoutes = groups.map((group) => `/gruppe/${group.slug}`);

      return [
        '/',
        '/form',
        ...groupRoutes,
      ];
    },
  },
};
