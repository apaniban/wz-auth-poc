import { withSession } from '../../lib/session'

const logout = async (req, res) => {
  req.session.destroy()

  return res.json({ loggedIn: false })
}

export default withSession(logout)
