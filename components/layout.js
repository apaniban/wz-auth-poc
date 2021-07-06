import Head from 'next/head'
import Header from './header'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Authentication POC</title>
    </Head>
    <Header />

    <main>
      <div>{ children }</div>
    </main>
  </>
)

export default Layout
