const AUTH_TOKEN_KEY = 'authToken'

export function isAuthenticated() {
  return Boolean(localStorage.getItem(AUTH_TOKEN_KEY))
}

export function signIn() {
  localStorage.setItem(AUTH_TOKEN_KEY, '1')
}

export function signOut() {
  localStorage.removeItem(AUTH_TOKEN_KEY)
}

