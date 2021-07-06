import { withSession } from '../../lib/session'

const getMe = async (req, res) => {
  const user = req.session.get('user')

  if (user) {
    return res.json(user)
  }

  return res.json({
    loggedIn: false
  })
}

export default withSession(getMe)
