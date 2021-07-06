import dynamic from 'next/dynamic';
import Layout from '../components/layout'
import Form from '../components/form'
import { useAuth } from '../contexts/auth-context'
import { useUser } from '../contexts/user-context'

const TaboolaAds = dynamic(() => import('../components/taboola-ads'), {
  ssr: false,
})

const PubliftAds = dynamic(() => import('../components/publift-ads'), {
  ssr: false,
})

const HOME_PUBLIFT_FUSE_ID = 21974059529

const Home = () => {
  const { user, showAds } = useUser()
  const { login } = useAuth({ redirectTo: '/' })

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
      <h1>Hello world</h1>
      { !user?.loggedIn && <Form handleSubmit={handleSubmit} /> }
      <PubliftAds showAds={showAds} fuseId={HOME_PUBLIFT_FUSE_ID} />
      <TaboolaAds showAds={showAds} />
    </Layout>
  )
}

export default Home
