import Vuex from 'vuex'
import Achievement from '../pages/achievement/_id'

import {
  addVuetify,
  addVuex,
  bootstrapVueContext,
  compositeConfiguration,
} from './setup'

describe('test edit achievement ', () => {
  let vueContext = null

  beforeEach(() => {
    vueContext = bootstrapVueContext(
      compositeConfiguration(addVuex, addVuetify)
    )
  })

  afterEach(() => {
    vueContext.teardownVueContext()
  })

  it('check input fields', () => {
    jest.mock('axios', () => ({
      get: Promise.resolve('value'),
    }))

    const $route = {
      params: {
        id: 1,
      },
    }
    const getters = {
      user: () => ({ id: 1 }),
    }
    const store = new Vuex.Store({
      getters,
    })
    const wrapper = vueContext.vueTestUtils.mount(Achievement, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance,
      store,
      mocks: {
        $route,
      },
    })
    const nameInput = wrapper.find('[data-testid="name"]')
    const descriptionInput = wrapper.find('[data-testid="description"]')

    expect(nameInput.exists()).toBeTruthy()
    expect(descriptionInput.exists()).toBeTruthy()
  })
})
