import * as R from 'ramda'
import { AppProvider } from '../contexts'

const App = ({ Component, pageProps }) => (
  <AppProvider>
      <Component { ...pageProps } />
  </AppProvider>
)

export default App
