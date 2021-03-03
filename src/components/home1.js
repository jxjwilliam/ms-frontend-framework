import React, { useContext } from 'react'
import Todo from '../react-use/use-reducer'

// Theme context, default to light theme
const ThemeContext = React.createContext('light')

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
})

export default class Home1 extends React.Component {
  render() {
    const { signedInUser, theme } = this.props

    // App component that provides initial context values
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Content />
          <Todo />
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

// A component may consume multiple contexts
function Content() {
  const theme1 = useContext(ThemeContext)
  const theme2 = useContext(UserContext)

  console.group('useContext')
  console.log(theme1)
  console.log(theme2)
  console.groupEnd()

  return (
    <>
      <h2>multiple context</h2>
      <div>user: {theme2.name}</div>
      <div>theme: {theme1}</div>
    </>
  )
}
