import TokenService from './storage.service'

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

const USER_DATA = 'user_data'
let context

const UserService = {
  init(baseURL) {
    context = baseURL
  },
  /**
   * Login the user and store the access token to TokenService.
   *
   * @returns access_token
   * @throws AuthenticationError
   **/
  async login(username, password) {
    try {
      const response = await context.$axios.$post(
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
      TokenService.saveToken(response.auth.access_token)
      TokenService.saveRefreshToken(response.auth.refresh_token)
      this.saveUser(response.user)

      // NOTE: We haven't covered this yet in our ApiService
      //       but don't worry about this just yet - I'll come back to it later
      // ApiService.mount401Interceptor();
      return response.auth.access_token
    } catch (error) {
      throw new AuthenticationError(
        error.response.status,
        error.response.data.detail
      )
    }
  },

  saveUser(userData) {
    localStorage.setItem(USER_DATA, JSON.stringify(userData))
  },

  getUser() {
    return JSON.parse(localStorage.getItem(USER_DATA))
  },

  /**
   * Refresh the access token.
   **/
  async refreshToken() {
    const refreshToken = TokenService.getRefreshToken()

    try {
      const response = await this.$axios.post(
        '/api/auth/refresh-token',
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        },
        {
          auth: {
            username: process.env.VUE_APP_CLIENT_ID,
            password: process.env.VUE_APP_CLIENT_SECRET,
          },
        }
      )
      TokenService.saveToken(response.access_token)
      TokenService.saveRefreshToken(response.refresh_token)

      return response.access_token
    } catch (error) {
      throw new AuthenticationError(
        error.response.status,
        error.response.data.detail
      )
    }
  },

  removeUser() {
    localStorage.removeItem(USER_DATA)
  },
  /**
   * Logout the current user by removing the token from storage.
   *
   * Will also remove `Authorization Bearer <token>` header from future requests.
   **/
  logout() {
    // Remove the token and remove Authorization header from Api Service as well
    TokenService.removeToken()
    TokenService.removeRefreshToken()
    this.removeUser()
    // NOTE: Again, we'll cover the 401 Interceptor a bit later.
    // ApiService.unmount401Interceptor()
  },
}

export default UserService

export { UserService, AuthenticationError }
