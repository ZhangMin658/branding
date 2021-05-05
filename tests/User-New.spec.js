import Vuex from 'vuex'
import User from '../pages/user/new.vue'
import {
  addVuetify,
  addVuex,
  bootstrapVueContext,
  compositeConfiguration,
} from './setup'
import TimezoneSelect from '~/components/inputs/TimezoneSelect'
import BackButton from '~/components/BackButton'

describe('test new user ', () => {
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
    const wrapper = vueContext.vueTestUtils.mount(User, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance,
      components: {
        TimezoneSelect,
        BackButton,
      },
      store,
      mocks: {
        $route,
      },
    })
    const firstNameInput = wrapper.find('#first_name')
    const lastNameInput = wrapper.find('#last_name')
    const phoneInput = wrapper.find('#phone')
    const emailInput = wrapper.find('#email')

    expect(lastNameInput.exists()).toBeTruthy()
    expect(firstNameInput.exists()).toBeTruthy()
    expect(phoneInput.exists()).toBeTruthy()
    expect(emailInput.exists()).toBeTruthy()
  })
})
