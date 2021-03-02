import React from 'react'

export const AuthContext = React.createContext({
  name: 'Guest',
})

export default function () {
  return <AuthContext.Consumer>Auth Context</AuthContext.Consumer>
}
