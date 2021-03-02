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

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => false,
})

/**
 * createContext
 * Context.Provider
 * Context.Consumer
 * useContext(MyContext) = (static contextType = MyContext)  = <MyContext.Consumer>.
 */
export default function () {
  // TODO: {theme, toggleTheme}
  const theme1 = React.useContext(ThemeContext)
  return (
    <>
      <button type="button" onClick={theme1.toggleTheme}>
        Toggle Theme (useContext)
      </button>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button type="button" onClick={toggleTheme}>
            Toggle Theme (consumer): {JSON.stringify(theme.background)}
          </button>
        )}
      </ThemeContext.Consumer>
    </>
  )
}
