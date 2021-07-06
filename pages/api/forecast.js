import { withSession } from '../../lib/session'

const getForecast = async (req, res) => {
  const user = req.session.get('user')
  const token = user?.token

  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  res.json({ precis: 'Sunny' })
}

export default withSession(getForecast)
