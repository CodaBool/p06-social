import { parseCookies, setCookie } from 'nookies'
import { parseJwt, dateParsed } from '../constants'

export function emailFromContext(context) {
  const cookies = parseCookies(context)
  if (cookies) {
    const token = cookies['__Secure-next-auth.session-token'] || cookies['next-auth.session-token']
    if (token) {
      return parseJwt(token).email
    } else {
      console.log('no session')
      return null
    }
  }
}