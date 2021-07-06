import dynamic from 'next/dynamic';

import Layout from '../components/layout'
import Form from '../components/form'
import { useAuth } from '../contexts/auth-context'
import { useUser } from '../contexts/user-context'
import { useForecast } from '../hooks/forecast'
import { withSession } from '../lib/session'

const TaboolaAds = dynamic(() => import('../components/taboola-ads'), {
  ssr: false,
})

const PubliftAds = dynamic(() => import('../components/publift-ads'), {
  ssr: false,
})

const HOME_PUBLIFT_FUSE_ID = 21974059529

const Home = (props) => {
  const { user, showAds } = useUser()
  const { login } = useAuth()
  const { forecast } = useForecast({ initialData: props.forecast })

  const greeting = user?.name ? `Good morning, ${user.name}!` : 'Good morning!'

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
      { !user?.loggedIn && <Form handleSubmit={handleSubmit} /> }

      <h1>{greeting}</h1>
      <h2>{forecast?.precis}</h2>
      { forecast?.summary && <h3>{forecast.summary}</h3> }
      { user?.accessToken && <p>Current access token: {user.accessToken}</p> }

      <PubliftAds showAds={showAds} fuseId={HOME_PUBLIFT_FUSE_ID} />
      <TaboolaAds showAds={showAds} pageType='article' targetType='mix' />
    </Layout>
  )
}

/**
 * We could also retrieve cookie values in server side
 */
export const getServerSideProps = withSession(async ({ req }) => {
  const user = req.session.get('user')

  /**
   * This is to demonstrate that we could build headers, and pass back the access token to upstream service
   * e.g.
   *
   * const headers = user?.accessToken ? { Authorization: `Bearer ${user.accessToken}` } : {}
   */

  return {
    props: {
      forecast: {
        precis: 'Sunny',
        summary: user?.accessToken ? "It's a good day in Sydney" : null
      }
    }
  }

})

export default Home
