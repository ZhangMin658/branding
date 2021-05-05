import Vuex from 'vuex'
import axios from 'axios'
import Branding from '../pages/branding'
import {
  addVuetify,
  addVuex,
  bootstrapVueContext,
  compositeConfiguration,
} from './setup'
import VTextAreaWithValidation from '~/components/inputs/VTextAreaWithValidation'
import VFileInputWithValidation from '~/components/inputs/VFileInputWithValidation'

describe('test branding ', () => {
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
    jest.mock('axios')

    axios.get = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({ data: { company_name: 'test', terms_url: 'url' } })
      )
    const getters = {
      user: () => ({ id: 1 }),
    }
    const store = new Vuex.Store({
      getters,
    })

    const wrapper = vueContext.vueTestUtils.mount(Branding, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance,
      store,
      components: {
        VTextAreaWithValidation,
        VFileInputWithValidation,
      },
      mocks: {
        $axios: {
          $get: jest.fn().mockImplementationOnce(() =>
            Promise.resolve({
              data: { company_name: 'test', terms_url: 'termurlvalue', logo: 'as' },
            })
          ),
        },
      },
    })

    const privacyUrl = wrapper.find('[data-testid="privacy_url"]')
    const termUrl = wrapper.find('#term_url')
    const address = wrapper.find('#address')
    const supportEmail = wrapper.find('#support_email')

    debugger
    expect(termUrl.value).toBe('termurlvalue')
    expect(privacyUrl.exists()).toBe(true)
    expect(privacyUrl.exists()).toBeTruthy()
    expect(termUrl.exists()).toBeTruthy()
    expect(address.exists()).toBeTruthy()
    expect(supportEmail.exists()).toBeTruthy()
  })
})
