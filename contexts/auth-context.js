import React from 'react'
import Router from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import * as R from 'ramda'

const AuthContext = React.createContext()

export const AuthProvider = (props) => {
  const { data: user, mutate: mutateUser } = useSWR('/api/me')

  const login = (body) => axios.post('/api/login', body)
    .then(R.prop('data'))
    .then((u) => mutateUser(u, false))

  const logout = () => axios.delete('/api/logout')
    .then(R.prop('data'))
    .then((u) => mutateUser(u, false))

  return (
    <AuthContext.Provider value={{ user, mutateUser, login, logout }} { ...props } />
  )
}

export const useAuth = ({ redirectTo } = {}) => {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }

  const { user } = context

  React.useEffect(() => {
    if (redirectTo && user?.loggedIn) {
      Router.push(redirectTo)
    }
  }, [redirectTo, user])

  return context
}
