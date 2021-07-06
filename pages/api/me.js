import { withSession } from '../../lib/session'

const getMe = async (req, res) => {
  const user = req.session.get('user')

  /*
   * NOTE: We should be parsing JWT here, and add more information about the user, like  show or hide ads
   *
   * e.g.
   * import jwt from 'jsonwebtoken'
   *
   * const payload = jwt.decode(user?.accessToken)
   * const { accessLevel } = payload
   * const result = { ...user, accessLevel }
   */

  if (user) {
    return res.json(user)
  }

  return res.json({
    loggedIn: false
  })
}

export default withSession(getMe)
