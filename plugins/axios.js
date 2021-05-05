import TokenService from '@/services/storage.service'

export default function ({ $axios, store, redirect, $notify }, inject) {
  $axios.setBaseURL(process.env.NUXT_ENV_API_URL)
  $axios.setToken(TokenService.getToken(), 'Bearer')
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('Content-Type', 'multipart/form-data', ['post'])
  $axios.onError((error) => {
    let lastPath = ''
    let message = 'Unexpected response error'
    if (!error.response) {
      // network error
      message = error.message
    }
    if (error.response && error.response.data) {
      message = error.response.data.message
      if (
        error.response.data.errors &&
        Object.keys(error.response.data.errors).length
      ) {
        const errorEntries = Object.entries(error.response.data.errors)
        const errorStringArray = errorEntries.map((error) => {
          const keyName = error[0]
          const str = error[1]
          return keyName + ': ' + str.join(',')
        })
        message = message.concat('<br />', errorStringArray.join('<br />'))
      }
      lastPath = error.response.config.url.split('/').slice(-1)[0]
    }
    if (message === 'Unauthenticated') {
      store.dispatch('clearTokenAndUser')
    }
    if (lastPath !== 'list') {
      store.commit('setAlert', {
        type: 'error',
        message,
      })
    }
    return Promise.resolve(false)
  })
  $axios.onResponse((response) => {
    if (response.status === 200 && response.config.method === 'post') {
      const lastPath = response.config.url.split('/').slice(-1)[0]
      if (
        lastPath !== 'list' &&
        lastPath !== 'login' &&
        lastPath !== 'logout'
      ) {
        let toastMessage = response.data.message
        if (Array.isArray(response.data.message)) {
          response.data.message.forEach((message) => {
            toastMessage = `${message.message.join(',')}: ${message.data.name}`
          })
        }
        store.commit('setAlert', {
          type: response.data.status,
          message: toastMessage,
        })
      }
    }
  })
  $axios.interceptors.response.use((response) => response.data)
}
