
export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: process.env.theme_color || '#ffffff' },
      { name: 'theme-color', content: process.env.theme_color || '#ffffff' },

      { itemprop: 'name', content: 'Socobat Environnement' },
      { itemprop: 'description', content: 'Spécialiste du traitement des dechets, centre de tri et location de bennes' },
      { itemprop: 'image', content: 'https://socobat-environnement.netlify.com/social/share-1200x630.jpg' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Socobat Environnement' },
      { name: 'twitter:description', content: 'Spécialiste du traitement des dechets, centre de tri et location de bennes' },
      { name: 'twitter:image', content: 'https://socobat-environnement.netlify.com/social/share-1200x600.jpg' },

      { property: 'og:site_name', content: 'Socobat Environnement' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://socobat-environnement.netlify.com' },
      { property: 'og:title', content: 'Socobat Environnement' },
      { property: 'og:description', content: 'Spécialiste du traitement des dechets, centre de tri et location de bennes' },
      { property: 'og:image', content: 'https://socobat-environnement.netlify.com/social/share-1200x630.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: 'favicon/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' },
      { rel: 'manifest', href: 'favicon/site.webmanifest' },
      { rel: 'mask-icon', href: 'favicon/safari-pinned-tab.svg', color: '#006633' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3aaa35' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/common.styl'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-173950467-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { path: './' }],
    // Doc : https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    stylus: './assets/style/*.styl'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    debug: true
  },
  proxy: {
    '/api/': {
      target: 'https://api.typeform.com/',
      pathRewrite: { '^/api/': '' }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes: [
      '/Aubervilliers',
      '/Aulnay-sous-Bois',
      '/Bagnolet',
      '/Bobigny',
      '/Bondy',
      '/Clichy-sous-Bois',
      '/Coubron',
      '/Drancy',
      '/Dugny',
      '/Epinay-sur-Seine',
      '/Gagny',
      '/Gournay-sur-Marne',
      '/L\'Ile-Saint-Denis',
      '/La Courneuve',
      '/Le Blanc-Mesnil',
      '/Le Bourget',
      '/Le Pré-Saint-Gervais',
      '/Le Raincy',
      '/Les Lilas',
      '/Les Pavillons-sous-Bois',
      '/Livry-Gargan',
      '/Montfermeil',
      '/Montreuil',
      '/Neuilly-Plaisance',
      '/Neuilly-sur-Marne',
      '/Noisy-le-Grand',
      '/Noisy-le-Sec',
      '/Pantin',
      '/Pierrefitte-sur-Seine',
      '/Romainville',
      '/Rosny-sous-Bois',
      '/Saint-Denis',
      '/Saint-Ouen-sur-Seine',
      '/Sevran',
      '/Stains',
      '/Tremblay-en-France',
      '/Vaujours',
      '/Villemomble',
      '/Villepinte',
      '/Villetaneuse'
    ]
  }
}
