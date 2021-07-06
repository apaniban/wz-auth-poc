import axios from 'axios'
import { withSession } from '../../lib/session'

const login = async (req, res) => {
  const { username, password } = req.body
  let user;

  if (username === 'admin') {
    user = {
      token: 'admin__token',
      accessLevel: 200,
      username: 'admin',
      name: 'Admin',
      loggedIn: true
    }
  }

  if (username === 'test') {
    user = {
      token: 'test__token',
      accessLevel: 0,
      username: 'test',
      name: 'Test',
      loggedIn: true
    }
  }

  if (user) {
    req.session.set('user', user)
    await req.session.save()
    return res.json(user)
  }

  return res.status(401).json({ message: 'not allowed' })
}

export default withSession(login)
