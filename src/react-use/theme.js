import React from 'react'

export const themes = {
  light: {
    foreground: 'rebeccapurple',
    background: '#eeeeee',
  },
  dark: {
    foreground: 'white',
    background: '#222222',
  },
}

export const ThemeContext = React.createContext(null)

/**
 * createContext, Context.Provider
 * Context.Consumer,useContext(MyContext) = (static contextType = MyContext)  = <MyContext.Consumer>.
 * 2-3 files involved:
 *  - provider: themes, createContext, Provider
 *  - switch-button: useContext(Provider) -> dispatch/toggle/set
 *  - theme-style: useContext(ThemeContext) -> theme
 */
export default function ({ children }) {
  const [themeName, setThemeName] = React.useState('light')
  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }
  return <ThemeContext.Provider value={[themeName, toggleTheme]}>{children}</ThemeContext.Provider>
}
