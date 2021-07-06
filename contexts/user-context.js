import React from 'react'
import { useAuth } from './auth-context'

const UserContext = React.createContext()

export const UserProvider = (props) => {
  const { user } = useAuth()
  const showAds = !user?.loggedIn || user.accessLevel < 100

  return <UserContext.Provider value={{ user, showAds }} {...props} />
}

export const useUser = () => {
  const context = React.useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}
