import Vuex from 'vuex'
import Kpi from '../pages/kpi'

import {
  addVuetify,
  addVuex,
  bootstrapVueContext,
  compositeConfiguration,
} from './setup'

describe('test kpi ', () => {
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
    const wrapper = vueContext.vueTestUtils.shallowMount(Kpi, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance,
      store,
      mocks: {
        $route,
      },
    })
    const fileInput = wrapper.find('#file_input')
    const importButton = wrapper.find('#import_button')
    const sampleFileLink = wrapper.find('#sample_file_link')

    expect(fileInput.exists()).toBeTruthy()
    expect(importButton.exists()).toBeTruthy()
    expect(sampleFileLink.exists()).toBeTruthy()
  })
})
