import Vuex from 'vuex'
import Competition from '../pages/competition/_id'
import {
  addVuetify,
  addVuex,
  bootstrapVueContext,
  compositeConfiguration,
} from './setup'
import PrizeManagement from '~/components/PrizeManagement'

import VFileInputWithValidation from '~/components/inputs/VFileInputWithValidation'
import BackButton from '~/components/BackButton'

describe('test edit competition ', () => {
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
    const wrapper = vueContext.vueTestUtils.mount(Competition, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance,
      components: {
        VFileInputWithValidation,
        BackButton,
        PrizeManagement,
      },
      store,
      mocks: {
        $route,
      },
    })
    const nameInput = wrapper.find('[data-testid="name"]')
    const autoEnterUserSwitch = wrapper.find('[data-testid="auto_enter_user"]')
    const statusSelect = wrapper.find('[data-testid="status"]')
    const periodSelect = wrapper.find('[data-testid="period"]')

    expect(nameInput.exists()).toBeTruthy()
    expect(autoEnterUserSwitch.exists()).toBeTruthy()
    expect(statusSelect.exists()).toBeTruthy()
    expect(periodSelect.exists()).toBeTruthy()
  })
})
