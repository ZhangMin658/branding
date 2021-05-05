import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ckeditor from '@ckeditor/ckeditor5-vue2'
import Email from '../pages/email/_id'
import {
  addVuetify,
  addVuex,
  bootstrapVueContext,
  compositeConfiguration,
} from './setup'
import EmailPreviewDialog from '~/components/EmailPreviewDialog'
import VConfirmButton from '~/components/VConfirmButton'

describe('test edit-email', () => {
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
    const wrapper = vueContext.vueTestUtils.mount(Email, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance,
      components: {
        ckeditor,
        ClassicEditor,
        EmailPreviewDialog,
        VConfirmButton,
      },
      store,
      mocks: {
        $route,
      },
    })
    const nameInput = wrapper.find('[data-testid="subject"]')
    const descriptionInput = wrapper.find('[data-testid="email_type"]')

    expect(nameInput.exists()).toBeTruthy()
    expect(descriptionInput.exists()).toBeTruthy()
  })
})
