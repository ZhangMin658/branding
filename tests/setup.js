export const addVuetify = (context) => {
  context.vuetify = require('vuetify')
  context.vue.use(context.vuetify)
  // eslint-disable-next-line new-cap
  context.vuetifyInstance = new context.vuetify()
}

export const addVuex = (context) => {
  context.vuex = require('vuex')
  context.vue.use(context.vuex)
}

export const addI18n = (options) => {
  return (context) => {
    context.i18n = require('vue-i18n')
    context.vue.use(context.i18n)
    // eslint-disable-next-line new-cap
    context.i18nInstance = new context.i18n(options)
  }
}

/**
 * Note: Installing Vue Router on a localVue also adds $route and $router as read-only properties to a localVue.
 * This means you can not use the mocks option to overwrite $route and $router when mounting a component using a localVue with Vue Router installed.
 */
export const addRouter = (context) => {
  context.router = require('vue-router')
  context.vue.use(context.router)
}

export const addFilter = (name, lambda) => {
  return (context) => context.vue.filter(name, lambda)
}

export const compositeConfiguration = (...configs) => {
  return (context) => configs.forEach((config) => config(context))
}

export const bootstrapVueContext = (configureContext) => {
  const context = {}
  const teardownVueContext = () => {
    jest.unmock('vue')
    Object.keys(context).forEach((key) => delete context[key])
    jest.resetModules()
  }

  jest.isolateModules(() => {
    context.vueTestUtils = require('@vue/test-utils')
    context.vue = context.vueTestUtils.createLocalVue()

    jest.doMock('vue', () => context.vue)

    configureContext && configureContext(context)
  })

  return {
    teardownVueContext,
    ...context,
  }
}
