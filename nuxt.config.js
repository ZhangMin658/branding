export default {
  env: {
    appName: 'XX APP',
    clientId: 'secret',
    clientSecret: 'secret',
    ADMIN_USERS_LIST: 'XXX/users/list',
    ADMIN_USERS_GET: 'XXX/users/get',
    ADMIN_USERS_CREATE: 'XXX/users/bulk-create',
    ADMIN_USERS_UPDATE: 'XXX/users/bulk-update',
    ADMIN_GROUPS_LIST: 'XXX/groups/list',
    ADMIN_GROUPS_CREATE: 'XXX/groups/create',
    ADMIN_GROUPS_UPDATE: 'XXX/groups/update',
    ADMIN_GROUPS_DELETE: 'XXX/groups/delete',
    ADMIN_GROUPS_ADD_USER: 'XXX/groups/add-user',
    ADMIN_GROUPS_REMOVE_USER: 'XXX/groups/remove-user',
    ADMIN_LEAGUES_LIST: 'XXX/leagues/list',
    ADMIN_LEAGUES_GET: 'XXX/leagues/get',
    ADMIN_LEAGUES_UPDATE: 'XXX/leagues/update',
    ADMIN_LEAGUES_DELETE: 'XXX/leagues/delete',
    ADMIN_COMPETITIONS_LIST: 'XXX/competitions/list',
    ADMIN_COMPETITIONS_ENTRANT: 'XXX/competitions/entrants',
    ADMIN_COMPETITIONS_GET: 'XXX/competitions/get',
    ADMIN_COMPETITIONS_CREATE: 'XXX/competitions/create',
    ADMIN_COMPETITIONS_UPDATE: 'XXX/competitions/update',
    ADMIN_ACHIEVEMENTS_LIST: 'XXX/achievements/list',
    ADMIN_ACHIEVEMENTS_GET: 'XXX/achievements/get',
    ADMIN_ACHIEVEMENTS_CREATE: 'XXX/achievements/create',
    ADMIN_ACHIEVEMENTS_UPDATE: 'XXX/achievements/update',
    ADMIN_ACHIEVEMENTS_DELETE: 'XXX/achievements/delete',
    ADMIN_PRIZES_LIST: 'XXX/prizes/list',
    ADMIN_PRIZES_CREATE: 'XXX/prizes/create',
    ADMIN_PRIZES_UPDATE: 'XXX/prizes/update',
    ADMIN_PRIZES_DELETE: 'XXX/prizes/delete',
    ADMIN_PRIZES_BULK_CREATE: 'XXX/prizes/bulk-create',
    ADMIN_DELIVERABLE_LIST: 'XXX/deliverables/list',
    ADMIN_KPI_CREATE: 'XXX/kpi/create',
    ADMIN_EMAIL_CONFIG_LIST: 'XXX/email-config/list',
    ADMIN_EMAIL_CONFIG_GET: 'XXX/email-config/get',
    ADMIN_EMAIL_CONFIG_UPDATE: 'XXX/email-config/update',
    ADMIN_EMAIL_SEND: 'XXX/emails/send',
    ADMIN_BRANDING_GET: 'XXX/branding/get',
    ADMIN_BRANDING_UPDATE: 'XXX/branding/update',
    ADMIN_PROFILE_UPDATE: 'XXX/profile/update',
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - XX APP',
    title: 'XX APP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@plugins/vuex-persist.js', mode: 'client' },
    { src: '@plugins/init.js', mode: 'client' },
    { src: '@plugins/axios.js', mode: 'client' },
    { src: '@/plugins/vee-validate.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['@nuxtjs/dotenv', { filename: '.env.' + process.env.NODE_ENV }],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n', '@nuxtjs/axios', '@nuxtjs/dotenv'],
  axios: {
    // baseURL: 'http://localhost:4000', // Used as fallback if no runtime config is provided
  },
  /*
   ** nuxt/i18n module configuration
   ** See https://i18n.nuxtjs.org/
   */
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-UK',
        file: 'en.js',
      },
      {
        code: 'tr',
        name: 'Türkçe',
        iso: 'tr-TR',
        file: 'tr.js',
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.js',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#BA68C8',
          accent: '#FF4081',
          secondary: '#ffe18d',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
          custom_purple: '#bb86fc',
        },
        light: {
          primary: '#A87FFF',
          accent: '#E91E63',
          secondary: '#30B1DC',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
          custom_purple: '#A87FFF',
          custom_purple_lighter: '#f2e7fe',
          custom_grey: '#f0f3f8',
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
}
