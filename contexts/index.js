import * as R from 'ramda'
import axios from 'axios'
import { SWRConfig } from 'swr'
import { AuthProvider } from './auth-context'
import { UserProvider } from './user-context'

const fetcher = (...params) => axios.get(...params).then(R.prop('data'))

export const AppProvider = ({ children }) => (
  <SWRConfig value ={{ fetcher, onError: console.error }}>
    <AuthProvider>
      <UserProvider>
        { children }
      </UserProvider>
    </AuthProvider>
  </SWRConfig>
)
