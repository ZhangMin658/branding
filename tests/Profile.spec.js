import Vuex from 'vuex'
import Profile from '../pages/profile'
import {
  addVuetify,
  addVuex,
  bootstrapVueContext,
  compositeConfiguration,
} from './setup'
import TimezoneSelect from '~/components/inputs/TimezoneSelect'

describe('test profile ', () => {
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
    const wrapper = vueContext.vueTestUtils.shallowMount(Profile, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance,
      store,
      components: {
        TimezoneSelect,
      },
      mocks: {
        $route,
      },
    })
    const firstNameInput = wrapper.find('#first_name')
    const lastNameInput = wrapper.find('#last_name')
    const phoneInput = wrapper.find('#phone')
    const emailInput = wrapper.find('#email')
    const usernameInput = wrapper.find('#username')

    expect(lastNameInput.exists()).toBeTruthy()
    expect(firstNameInput.exists()).toBeTruthy()
    expect(phoneInput.exists()).toBeTruthy()
    expect(emailInput.exists()).toBeTruthy()
    expect(usernameInput.exists()).toBeTruthy()
  })
})
