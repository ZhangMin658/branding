import User from '../pages/user/_id.vue'
import {
  addVuetify,
  bootstrapVueContext,
  compositeConfiguration,
} from './setup'
import TimezoneSelect from '~/components/inputs/TimezoneSelect'
import BackButton from '~/components/BackButton'
import VFileInputWithValidation from '~/components/inputs/VFileInputWithValidation'

describe('test edit user ', () => {
  let vueContext = null
  const model = {
    first_name: 'test name',
    last_name: 'test last name',
  }

  beforeEach(() => {
    vueContext = bootstrapVueContext(compositeConfiguration(addVuetify))
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
    const wrapper = vueContext.vueTestUtils.mount(User, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance,
      components: {
        TimezoneSelect,
        BackButton,
        VFileInputWithValidation,
      },
      mocks: {
        $route,
      },
      data() {
        return {
          model,
        }
      },
    })
    const firstNameInput = wrapper.find('[data-testid="first_name"]')
    const lastNameInput = wrapper.find('[data-testid="last_name"]')
    const phoneInput = wrapper.find('[data-testid="phone"]')
    const emailInput = wrapper.find('[data-testid="email"]')

    expect(lastNameInput.exists()).toBeTruthy()
    expect(lastNameInput.element.__vue__.innerValue).toBe('test last name')

    expect(firstNameInput.exists()).toBeTruthy()
    expect(firstNameInput.element.__vue__.innerValue).toBe('test name')

    expect(phoneInput.exists()).toBeTruthy()
    expect(emailInput.exists()).toBeTruthy()
  })
})
