import TokenService from '../services/storage.service'

const USER_DATA = 'user_data'

const saveUser = (userData) => {
  localStorage.setItem(USER_DATA, JSON.stringify(userData))
}

const getUser = () => {
  return JSON.parse(localStorage.getItem(USER_DATA))
}

const removeUser = () => {
  localStorage.removeItem(USER_DATA)
}
const state = {
  alert: null,
  accessToken: TokenService.getToken(),
  navbarShow: true,
  user: getUser(),
}

const getters = {
  loggedIn: (state) => {
    return !!state.accessToken
  },
  user: (state) => {
    return state.user
  },
  alert: (state) => {
    return state.alert
  },
  navbarShow: (state) => {
    return state.navbarShow
  },
}

const actions = {
  async login({ commit, dispatch }, { username, password }) {
    const response = await this.$axios.$post(
      '/api/auth/login',
      {
        grant_type: 'password',
        username,
        password,
      },
      {
        auth: {
          username: process.env.clientId,
          password: process.env.clientSecret,
        },
      }
    )
    if (
      response &&
      response.user &&
      !response.user.roles.some((e) => e.name === 'admin')
    ) {
      dispatch('setAlert', {
        type: 'error',
        message: 'You must have admin role to access this application',
      })
    }
    if (
      response &&
      response.auth &&
      response.user &&
      response.user.roles.some((e) => e.name === 'admin')
    ) {
      commit('setAccessToken', response.auth.access_token)
      TokenService.saveToken(response.auth.access_token)
      TokenService.saveRefreshToken(response.auth.refresh_token)

      const loggedInUser = response.user
      loggedInUser.timezone = null
      if (!loggedInUser.timezone || loggedInUser.timezone === '') {
        loggedInUser.timezone = 'UTC'
      }
      commit('setUser', loggedInUser)
      saveUser(response.user)
      // Redirect the user to the page he first tried to visit or to the home view
      // await router.push(router.history.current.query.redirect || '/dashboard')
      await this.app.router.push('/dashboard')
    } else {
      return false
    }
    return true
  },

  async logout({ dispatch }) {
    const response = await this.$axios.post('/api/auth/logout')
    if (response.status === 'success') {
      dispatch('clearTokenAndUser')
    }
  },
  clearTokenAndUser({ commit }) {
    TokenService.removeRefreshToken()
    TokenService.removeToken()
    removeUser()
    commit('setUser', null)
    commit('setAccessToken', null)
    commit('setAlert', null)
    this.app.router.push('/login')
  },
  changeNavbarState({ commit }, payload) {
    commit('navbarState', payload)
  },
  setAlert({ commit }, alert) {
    commit('setAlert', alert)
  },
}

const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  setUser(state, user) {
    state.user = user
  },
  navbarState: (state, payload) => {
    state.navbarShow = payload.state
  },
  setAlert: (state, alert) => {
    state.alert = alert
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
