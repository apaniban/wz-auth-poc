import axios from 'axios'

import { withSession } from '../lib/session'
import Layout from '../components/layout'

const Dashboard = ({ user }) => (
  <Layout>
    <h1>Welcome back, {user.username}</h1>
  </Layout>
)

export const getServerSideProps = withSession(({ req }) => {
  const user = req.session.get('user')

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { user }
  }
})

export default Dashboard
