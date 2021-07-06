import axios from 'axios'
import Form from '../components/form'
import Layout from '../components/layout'
import { useAuth } from '../contexts/auth-context'

const Login = () => {
  const { login } = useAuth({
    redirectTo: '/dashboard'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    }

    try {
      await login(body)
    } catch (err) {
      console.error('login failed', err)
    }
  }

  return (
    <Layout>
      <Form handleSubmit={handleSubmit} />
    </Layout>
  )
}

export default Login
