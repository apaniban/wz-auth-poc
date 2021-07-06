import { withIronSession } from 'next-iron-session'

export const withSession = (handler) => withIronSession(handler, {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: 'wz6-session',
  cookieOptions: {
    secure: false
  }
})
