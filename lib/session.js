import { withIronSession } from 'next-iron-session'

const password = 'passwordpasswordpasswordpasswordpassword'
export const withSession = (handler) => withIronSession(handler, {
  //password: process.env.SECRET_COOKIE_PASSWORD,
  password,
  cookieName: 'wz6-session',
})
