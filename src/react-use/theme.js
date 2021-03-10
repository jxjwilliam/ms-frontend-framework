import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
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

  return <ThemeContext.Provider value={[themeName, setThemeName]}>{children}</ThemeContext.Provider>
}
